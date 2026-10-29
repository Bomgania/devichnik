import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding Devichnik Beauty Studio database with authentic Ukrainian data...');

  // Clean existing data
  await prisma.appointment.deleteMany();
  await prisma.portfolioItem.deleteMany();
  await prisma.review.deleteMany();
  await prisma.service.deleteMany();
  await prisma.master.deleteMany();

  // 1. Create Authentic Masters from Altegio
  const masters = await Promise.all([
    prisma.master.create({
      data: {
        name: 'Наталія',
        specialization: 'Перукар-колорист, стиліст зачісок',
        experience: '8 років досвіду',
        bio: 'Топ-колорист студії Devichnik. Експертка зі складних технік освітлення: Airtouch, тотал блонд, контуринг та вихід з чорного кольору з максимальним збереженням якості волосся.',
        photo: 'https://assets.alteg.io/masters/origin/9/9d/9d42f3ddd977fad_20251211014910.jpeg',
        rating: 4.9,
        reviewCount: 164,
      },
    }),
    prisma.master.create({
      data: {
        name: 'Ауріка',
        specialization: 'Бровіст, майстер перманентного макіяжу',
        experience: '5 років досвіду',
        bio: 'Створює гармонійну архітектуру брів, виконує делікатне ламінування, стійке фарбування та пудровий перманентний макіяж брів і губ.',
        photo: 'https://assets.alteg.io/masters/origin/e/ef/ef1d58c929b0c83_20251211003047.jpeg',
        rating: 5.0,
        reviewCount: 142,
      },
    }),
    prisma.master.create({
      data: {
        name: 'Катерина',
        specialization: 'Lashmaker, майстер моделювання погляду',
        experience: '4 роки досвіду',
        bio: 'Професійне ламінування та безпечне нарощування вій від класики до об’ємів 2D–4D. Легкість, комфорт під час носіння та виразний погляд.',
        photo: 'https://assets.alteg.io/masters/origin/d/da/da4c882ca22176c_20260610194828.jpeg',
        rating: 4.9,
        reviewCount: 98,
      },
    }),
    prisma.master.create({
      data: {
        name: 'Наталя',
        specialization: 'Перукар-стиліст, експерт відновлення волосся',
        experience: '7 років досвіду',
        bio: 'Спеціалізується на архітектурних жіночих стрижках, біозавивці нового покоління та глибоких протоколах регенерації волосся JOICO K-PAK і BRAÉ.',
        photo: 'https://assets.alteg.io/masters/origin/1/17/178caeb211b3f0d_20251211014857.jpeg',
        rating: 4.9,
        reviewCount: 119,
      },
    }),
    prisma.master.create({
      data: {
        name: 'Анна',
        specialization: 'Провідна майстриня нігтьового сервісу',
        experience: '5 років досвіду',
        bio: 'Ідеальне комбіноване очищення кутикули, вирівнювання нігтьової пластини, зміцнення гелем та стійке естетичне покриття під кутикулу.',
        photo: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=800&q=80',
        rating: 4.9,
        reviewCount: 135,
      },
    }),
  ]);

  console.log(`Created ${masters.length} masters.`);

  // 2. Create Real Services from Altegio Price List
  const services = await Promise.all([
    // Фарбування
    prisma.service.create({
      data: {
        name: 'Складна техніка Airtouch',
        category: 'Фарбування',
        duration: 240,
        price: 6500,
        description: 'Филигранне видування пасом феном для максимально плавного відростання без чітких меж. Включає освітлення, тонування та захисний догляд.',
        imageUrl: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&w=800&q=80',
        isPopular: true,
      },
    }),
    prisma.service.create({
      data: {
        name: 'Тотал блонд + тонування MATRIX',
        category: 'Фарбування',
        duration: 180,
        price: 5000,
        description: 'Рівномірне чисте освітлення по всій довжині або коренів, насичення структури пігментами та надання діамантового блиску.',
        imageUrl: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=800&q=80',
        isPopular: true,
      },
    }),
    prisma.service.create({
      data: {
        name: 'Контуринг волосся',
        category: 'Фарбування',
        duration: 150,
        price: 3700,
        description: 'Акцентне освітлення пасом біля обличчя, яке візуально освіжає погляд і підкреслює риси обличчя без повного фарбування.',
        imageUrl: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
        isPopular: false,
      },
    }),
    prisma.service.create({
      data: {
        name: 'Вихід з чорного кольору',
        category: 'Фарбування',
        duration: 300,
        price: 6500,
        description: 'Багатоетапне безпечне змивання темного штучного пігменту з тестом на міцність пасма та збереженням структури волосся.',
        imageUrl: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80',
        isPopular: false,
      },
    }),

    // Догляд для волосся
    prisma.service.create({
      data: {
        name: 'Професійний догляд JOICO K-PAK',
        category: 'Догляд JOICO & BRAÉ',
        duration: 90,
        price: 1800,
        description: 'Американський 4-етапний терапевтичний ритуал глибокої реконструкції білкового каркасу пошкодженого волосся на клітинному рівні.',
        imageUrl: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80',
        isPopular: true,
      },
    }),
    prisma.service.create({
      data: {
        name: 'Преміальний догляд BRAÉ Revival',
        category: 'Догляд JOICO & BRAÉ',
        duration: 75,
        price: 1500,
        description: 'Бразильський ліпідо-відновлювальний догляд, який миттєво повертає шовковистість, еластичність та дзеркальне сяйво тьмяному волоссю.',
        imageUrl: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80',
        isPopular: false,
      },
    }),

    // Стрижки та укладки
    prisma.service.create({
      data: {
        name: 'Жіноча стрижка + миття з італійською маскою',
        category: 'Стрижки та зачіски',
        duration: 75,
        price: 1000,
        description: 'Підбір форми за типом обличчя, спа-миття голови з поживним італійським доглядом та фінішна укладка на браш.',
        imageUrl: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=800&q=80',
        isPopular: true,
      },
    }),
    prisma.service.create({
      data: {
        name: 'Біозавивка волосся нового покоління',
        category: 'Стрижки та зачіски',
        duration: 150,
        price: 4000,
        description: 'М’які природні завитки без агресивних компонентів. Зберігає блиск волосся та додає розкішного об’єму на строк до 6 місяців.',
        imageUrl: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80',
        isPopular: false,
      },
    }),
    prisma.service.create({
      data: {
        name: 'Укладка «Локони» / Голлівудська хвиля',
        category: 'Стрижки та зачіски',
        duration: 60,
        price: 1100,
        description: 'Стійка вечірня чи повсякденна укладка з термозахистом і фіксацією без склеювання.',
        imageUrl: 'https://images.unsplash.com/photo-1512290900672-1f4864f16a04?auto=format&fit=crop&w=800&q=80',
        isPopular: false,
      },
    }),

    // Манікюр
    prisma.service.create({
      data: {
        name: 'Манікюр + Зміцнення (покриття в один тон)',
        category: 'Манікюр',
        duration: 90,
        price: 1200,
        description: 'Апаратний або комбінований манікюр, зміцнення нігтьової пластини каучуковою або гелевою базою, ідеальне вирівнювання та покриття.',
        imageUrl: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=800&q=80',
        isPopular: true,
      },
    }),
    prisma.service.create({
      data: {
        name: 'Нарощування нігтів гелем / полігелем',
        category: 'Манікюр',
        duration: 150,
        price: 2100,
        description: 'Моделювання форми (мигдаль, квадрат, овал), зміцнення вільного краю та елегантний колір.',
        imageUrl: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80',
        isPopular: false,
      },
    }),

    // Брови та вії
    prisma.service.create({
      data: {
        name: 'Ламінування брів (корекція + фарбування)',
        category: 'Брови та Вії',
        duration: 60,
        price: 900,
        description: 'Довготривале укладання волосків у потрібному напрямку, моделювання симетрії пінцетом/воском та насичений колір.',
        imageUrl: 'https://images.unsplash.com/photo-1597225244660-1cd128c64284?auto=format&fit=crop&w=800&q=80',
        isPopular: true,
      },
    }),
    prisma.service.create({
      data: {
        name: 'Ламінування вій (+фарбування)',
        category: 'Брови та Вії',
        duration: 75,
        price: 1000,
        description: 'Створення виразного природного завитка, насичення кератином і фарбування для ефекту нафарбованих очей.',
        imageUrl: 'https://images.unsplash.com/photo-1583001931096-959e9a1a6223?auto=format&fit=crop&w=800&q=80',
        isPopular: false,
      },
    }),
    prisma.service.create({
      data: {
        name: 'Нарощування вій 2D / 3D об’єм',
        category: 'Брови та Вії',
        duration: 120,
        price: 1450,
        description: 'Невагомі ультратонкі вії преміум-якості. Індивідуальне моделювання ефекту (лисичка, білочка, натуральний).',
        imageUrl: 'https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?auto=format&fit=crop&w=800&q=80',
        isPopular: false,
      },
    }),
    prisma.service.create({
      data: {
        name: 'Перманентний макіяж брів (пудрове напилення)',
        category: 'Брови та Вії',
        duration: 120,
        price: 3500,
        description: 'М’яка піксельна техніка з градієнтом, яка виглядає як професійний легкий макіяж тінями терміном до 1.5–2 років.',
        imageUrl: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
        isPopular: false,
      },
    }),
  ]);

  console.log(`Created ${services.length} services.`);

  // 3. Create Real Authentic Reviews from Altegio
  const reviews = await Promise.all([
    prisma.review.create({
      data: {
        author: 'Ганна',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
        rating: 5,
        text: 'Чудове місце, де можна по-справжньому відпочити і присвятити час собі! Дуже спокійна атмосфера, ввічливі адміністратори та смачна кава. Робила догляд JOICO — волосся просто ожило!',
        date: '14 жовтня 2026',
        service: 'Професійний догляд JOICO K-PAK',
      },
    }),
    prisma.review.create({
      data: {
        author: 'Анастасія',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
        rating: 5,
        text: 'Приємний майстер Ауріка. Брови зробила просто чудово 🥰 Колір ідеально підібраний під відтінок мого волосся. Обов’язково повернуся ще!',
        date: '9 жовтня 2026',
        service: 'Ламінування брів (корекція + фарбування)',
      },
    }),
    prisma.review.create({
      data: {
        author: 'Дарина Горобей',
        avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
        rating: 5,
        text: 'Уважна, впевнена майстриня, без зайвих питань все дуже якісно та швидко робить! Дуже сподобалося відношення та результат. Рекомендую салон усім у ЖК Львівський.',
        date: '8 липня 2026',
        service: 'Стрижка + укладка',
      },
    }),
    prisma.review.create({
      data: {
        author: 'Юлія',
        avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80',
        rating: 5,
        text: 'Чудовий майстер Наталія! Робили складне фарбування Airtouch. Дуже подобається результат: м’який перехід, волосся залишилось щільним і здоровим :)',
        date: '5 липня 2026',
        service: 'Складна техніка Airtouch',
      },
    }),
    prisma.review.create({
      data: {
        author: 'Альона',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
        rating: 5,
        text: 'Звертаюся у Devichnik вже не перший раз. Сервіс завжди стабільно на висоті, інструменти стерильні, дівчата знають свою справу на всі 100%. Буду продовжувати ходити сюди далі!',
        date: '5 липня 2026',
        service: 'Манікюр + зміцнення',
      },
    }),
    prisma.review.create({
      data: {
        author: 'Наталя',
        avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=200&q=80',
        rating: 5,
        text: 'Дуже задоволена візитом! У кабінеті бездоганна чистота, крафт-пакети відкривають при клієнті, атмосфера затишна та розслаблююча. Манікюр носиться 4 тижні без жодного сколу.',
        date: '30 червня 2026',
        service: 'Манікюр + Укріплення',
      },
    }),
  ]);

  console.log(`Created ${reviews.length} reviews.`);

  // 4. Create Portfolio Items
  const portfolioItems = await Promise.all([
    prisma.portfolioItem.create({
      data: {
        title: 'Airtouch у бежево-перлинному відтінку',
        category: 'Фарбування',
        imageUrl: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=800&q=80',
        beforeImageUrl: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80',
        description: 'Плавний перелив блонду від натурального кореня, виконаний топ-колористом Наталією.',
        masterId: masters[0].id,
      },
    }),
    prisma.portfolioItem.create({
      data: {
        title: 'Ламінування вій та оформлення брів',
        category: 'Брови та Вії',
        imageUrl: 'https://images.unsplash.com/photo-1597225244660-1cd128c64284?auto=format&fit=crop&w=800&q=80',
        description: 'Виразний погляд без туші: шовковий завиток вій та пудрова корекція форми брів.',
        masterId: masters[1].id,
      },
    }),
    prisma.portfolioItem.create({
      data: {
        title: 'Мінімалістичний нюд зі зміцненням',
        category: 'Манікюр',
        imageUrl: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=800&q=80',
        description: 'Чистий манікюр під кутикулу, вирівнювання архітектури та стійке покриття.',
        masterId: masters[4].id,
      },
    }),
    prisma.portfolioItem.create({
      data: {
        title: 'Реконструкція та глибокий блиск JOICO K-PAK',
        category: 'Догляд JOICO & BRAÉ',
        imageUrl: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80',
        description: 'Результат після однієї процедури терапевтичного американського догляду.',
        masterId: masters[3].id,
      },
    }),
    prisma.portfolioItem.create({
      data: {
        title: 'Градуйований боб-каре та об’ємна укладка',
        category: 'Стрижки та зачіски',
        imageUrl: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80',
        description: 'Стрижка, яка тримає геометрію навіть після простої сушки вдома.',
        masterId: masters[3].id,
      },
    }),
    prisma.portfolioItem.create({
      data: {
        title: 'Нарощування вій «Натуральний 2D ефект»',
        category: 'Брови та Вії',
        imageUrl: 'https://images.unsplash.com/photo-1583001931096-959e9a1a6223?auto=format&fit=crop&w=800&q=80',
        description: 'Акуратне розкриття пучків, невагомість на очах та стійкість до 5 тижнів.',
        masterId: masters[2].id,
      },
    }),
  ]);

  console.log(`Created ${portfolioItems.length} portfolio items.`);

  console.log('Seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error('Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
