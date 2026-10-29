'use client';

import React, { useState, useEffect } from 'react';
import { Master, Service } from '@/types';
import { X, Calendar, Sparkles, AlertCircle, Phone, User, CheckCircle2, ExternalLink, Send } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  masters: Master[];
  services: Service[];
  initialMasterId?: string;
  initialServiceId?: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  masters,
  services,
  initialMasterId,
  initialServiceId,
}: BookingModalProps) {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('');
  const [selectedMasterId, setSelectedMasterId] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [clientName, setClientName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [notes, setNotes] = useState<string>('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [confirmedData, setConfirmedData] = useState<any>(null);

  // Sync initial selections when modal opens
  useEffect(() => {
    if (isOpen) {
      if (initialServiceId) setSelectedServiceId(initialServiceId);
      else if (services.length > 0 && !selectedServiceId) setSelectedServiceId(services[0].id);

      if (initialMasterId) setSelectedMasterId(initialMasterId);
      else if (masters.length > 0 && !selectedMasterId) setSelectedMasterId(masters[0].id);

      // Default date: tomorrow
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      const dateStr = tomorrow.toISOString().split('T')[0];
      if (!selectedDate) setSelectedDate(dateStr);
      if (!selectedTime) setSelectedTime('14:00');

      setError(null);
      setSuccess(false);
    }
  }, [isOpen, initialServiceId, initialMasterId, services, masters]);

  if (!isOpen) return null;

  // Generate next 7 days in Ukrainian
  const availableDates = Array.from({ length: 7 }).map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i + 1);
    const yyyyMmDd = d.toISOString().split('T')[0];
    const dayName = d.toLocaleDateString('uk-UA', { weekday: 'short' });
    const dayNum = d.getDate();
    const monthName = d.toLocaleDateString('uk-UA', { month: 'short' });
    return { value: yyyyMmDd, label: `${dayName}, ${dayNum} ${monthName}` };
  });

  const availableTimeSlots = [
    '10:00',
    '11:30',
    '13:00',
    '14:30',
    '16:00',
    '17:30',
    '19:00',
    '20:00',
  ];

  const selectedService = services.find((s) => s.id === selectedServiceId);
  const selectedMaster = masters.find((m) => m.id === selectedMasterId);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!clientName.trim()) {
      setError('Будь ласка, вкажіть ваше ім’я');
      return;
    }
    if (!phone.trim() || phone.trim().length < 7) {
      setError('Будь ласка, введіть дійсний контактний номер телефону');
      return;
    }
    if (!selectedServiceId || !selectedMasterId || !selectedDate || !selectedTime) {
      setError('Будь ласка, оберіть послугу, майстра, дату та час');
      return;
    }

    try {
      setLoading(true);

      const newAppointment = {
        id: `apt-${Date.now()}`,
        clientName: clientName.trim(),
        phone: phone.trim(),
        date: selectedDate,
        time: selectedTime,
        masterId: selectedMasterId,
        serviceId: selectedServiceId,
        notes: notes.trim(),
        service: selectedService,
        master: selectedMaster,
        createdAt: new Date().toISOString(),
      };

      // Save to localStorage (ensures offline and static GitHub Pages compatibility)
      try {
        const existing = JSON.parse(localStorage.getItem('devichnik_appointments') || '[]');
        existing.unshift(newAppointment);
        localStorage.setItem('devichnik_appointments', JSON.stringify(existing));
      } catch (storageErr) {
        console.warn('LocalStorage error:', storageErr);
      }

      setConfirmedData(newAppointment);
      setSuccess(true);
    } catch (err: any) {
      setError(err.message || 'Виникла непередбачена помилка під час оформлення');
    } finally {
      setLoading(false);
    }
  };

  const telegramShareText = encodeURIComponent(
    `Вітаю! Хочу підтвердити запис у Devichnik Beauty Studio:\n- Гість: ${clientName}\n- Телефон: ${phone}\n- Послуга: ${selectedService?.name}\n- Майстер: ${selectedMaster?.name}\n- Дата: ${selectedDate} о ${selectedTime}`
  );

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl bg-[#FAF8F5] rounded-3xl shadow-2xl border border-[#DDD3C5] overflow-hidden my-8"
      >
        {/* Header */}
        <div className="bg-[#181716] text-white p-6 sm:p-8 flex items-center justify-between relative">
          <div>
            <div className="flex items-center space-x-2 text-xs uppercase tracking-widest text-[#C49F70] font-semibold mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Devichnik Beauty Studio • ЖК Львівський</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-light">Онлайн-запис до майстра</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Закрити вікно"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          {success ? (
            /* Success confirmation screen */
            <div className="text-center py-8 space-y-6 animate-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <h4 className="font-serif text-3xl font-light text-[#181716] mb-2">
                  Ваш запис успішно сформовано!
                </h4>
                <p className="text-sm text-[#66625D]">
                  Дякуємо! Наш адміністратор зв’яжеться з вами за вказаним номером для підтвердження.
                </p>
              </div>

              <div className="glass-card p-6 rounded-2xl max-w-md mx-auto text-left space-y-3 border border-[#DDD3C5]">
                <div className="flex justify-between text-xs py-1 border-b border-[#EAE3D9]">
                  <span className="text-[#8C8680]">Гість:</span>
                  <span className="font-medium text-[#181716]">{confirmedData?.clientName}</span>
                </div>
                <div className="flex justify-between text-xs py-1 border-b border-[#EAE3D9]">
                  <span className="text-[#8C8680]">Телефон:</span>
                  <span className="font-medium text-[#181716]">{confirmedData?.phone}</span>
                </div>
                <div className="flex justify-between text-xs py-1 border-b border-[#EAE3D9]">
                  <span className="text-[#8C8680]">Послуга:</span>
                  <span className="font-medium text-[#181716] text-right">
                    {confirmedData?.service?.name}
                  </span>
                </div>
                <div className="flex justify-between text-xs py-1 border-b border-[#EAE3D9]">
                  <span className="text-[#8C8680]">Майстер:</span>
                  <span className="font-medium text-[#181716]">{confirmedData?.master?.name}</span>
                </div>
                <div className="flex justify-between text-xs py-1">
                  <span className="text-[#8C8680]">Дата та час:</span>
                  <span className="font-semibold text-[#B28854]">
                    {confirmedData?.date} о {confirmedData?.time}
                  </span>
                </div>
              </div>

              {/* Instant Messenger confirmation option */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <a
                  href={`https://t.me/share/url?url=https://www.instagram.com/devichnik_beauty_studio/&text=${telegramShareText}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded-full text-xs uppercase tracking-wider font-semibold text-white bg-[#229ED9] hover:bg-[#1E88E5] transition-colors flex items-center justify-center space-x-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Підтвердити в Telegram</span>
                </a>

                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-3 rounded-full text-xs uppercase tracking-wider font-semibold text-white bg-[#181716] hover:bg-[#B28854] transition-colors"
                >
                  Зрозуміло, дякую!
                </button>
              </div>
            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center space-x-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {/* Service Selection */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#181716] mb-2">
                  1. Оберіть послугу
                </label>
                <select
                  value={selectedServiceId}
                  onChange={(e) => setSelectedServiceId(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-white border border-[#DDD3C5] text-sm text-[#181716] focus:outline-none focus:border-[#B28854]"
                >
                  {services.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.category} — {s.name} ({s.duration} хв / {new Intl.NumberFormat('uk-UA').format(s.price)} ₴)
                    </option>
                  ))}
                </select>
              </div>

              {/* Master Selection */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#181716] mb-2">
                  2. Оберіть майстра
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {masters.map((m) => (
                    <div
                      key={m.id}
                      onClick={() => setSelectedMasterId(m.id)}
                      className={`p-3 rounded-xl border flex items-center space-x-3 cursor-pointer transition-all ${
                        selectedMasterId === m.id
                          ? 'border-[#B28854] bg-[#FAF0ED]/80 shadow-sm ring-1 ring-[#B28854]'
                          : 'border-[#DDD3C5] bg-white hover:border-[#8C8680]'
                      }`}
                    >
                      <img
                        src={m.photo}
                        alt={m.name}
                        className="w-12 h-12 rounded-full object-cover shrink-0"
                      />
                      <div className="overflow-hidden">
                        <div className="text-xs font-serif font-semibold text-[#181716] truncate">
                          {m.name}
                        </div>
                        <div className="text-[10px] text-[#8C8680] truncate">{m.specialization}</div>
                        <div className="text-[10px] text-[#B28854] font-medium">★ {m.rating}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Date & Time selection */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#181716] mb-2">
                  3. Дата та час візиту
                </label>

                {/* Horizontal date buttons */}
                <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
                  {availableDates.map((dateObj) => (
                    <button
                      type="button"
                      key={dateObj.value}
                      onClick={() => setSelectedDate(dateObj.value)}
                      className={`px-3.5 py-2 rounded-xl text-xs whitespace-nowrap transition-all cursor-pointer ${
                        selectedDate === dateObj.value
                          ? 'bg-[#181716] text-white shadow-sm font-medium'
                          : 'bg-white border border-[#DDD3C5] text-[#44413E] hover:border-[#8C8680]'
                      }`}
                    >
                      {dateObj.label}
                    </button>
                  ))}
                </div>

                {/* Time Slots */}
                <div className="grid grid-cols-4 gap-2 mt-3">
                  {availableTimeSlots.map((timeStr) => (
                    <button
                      type="button"
                      key={timeStr}
                      onClick={() => setSelectedTime(timeStr)}
                      className={`py-2 text-center rounded-lg text-xs font-medium transition-all cursor-pointer ${
                        selectedTime === timeStr
                          ? 'bg-[#B28854] text-white shadow-sm font-semibold'
                          : 'bg-white border border-[#DDD3C5] text-[#44413E] hover:bg-[#FAF8F5]'
                      }`}
                    >
                      {timeStr}
                    </button>
                  ))}
                </div>
              </div>

              {/* Client Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#181716] mb-1.5">
                    Ваше ім’я
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#8C8680] absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="Наприклад, Олена"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-white border border-[#DDD3C5] text-xs text-[#181716] focus:outline-none focus:border-[#B28854]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#181716] mb-1.5">
                    Номер телефону
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#8C8680] absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      placeholder="+380 (__) ___-__-__"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-white border border-[#DDD3C5] text-xs text-[#181716] focus:outline-none focus:border-[#B28854]"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#181716] mb-1.5">
                  Побажання до процедури (необов’язково)
                </label>
                <textarea
                  rows={2}
                  placeholder="Особливі побажання щодо кольору, довжини чи напоїв..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-white border border-[#DDD3C5] text-xs text-[#181716] focus:outline-none focus:border-[#B28854]"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-full text-xs uppercase tracking-widest font-semibold text-white bg-[#181716] hover:bg-[#B28854] transition-all duration-300 shadow-md flex items-center justify-center space-x-2 disabled:opacity-50 cursor-pointer"
              >
                {loading ? (
                  <span>Оформлення...</span>
                ) : (
                  <>
                    <Calendar className="w-4 h-4" />
                    <span>Підтвердити запис</span>
                  </>
                )}
              </button>

              {/* Direct Altegio link alternative */}
              <div className="pt-2 text-center border-t border-[#EAE3D9]">
                <a
                  href="https://n824636.alteg.io/company/774294/personal/select-master"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-1.5 text-xs text-[#8C8680] hover:text-[#B28854] transition-colors"
                >
                  <span>Відкрити прямий віджет онлайн-запису Altegio</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
