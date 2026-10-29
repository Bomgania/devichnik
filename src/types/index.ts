export interface Master {
  id: string;
  name: string;
  specialization: string;
  experience: string;
  bio: string | null;
  photo: string;
  rating: number;
  reviewCount: number;
}

export interface Service {
  id: string;
  name: string;
  category: string;
  description: string | null;
  duration: number;
  price: number;
  imageUrl: string | null;
  isPopular: boolean;
}

export interface Review {
  id: string;
  author: string;
  avatar: string | null;
  rating: number;
  text: string;
  date: string;
  service: string | null;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  beforeImageUrl: string | null;
  description: string | null;
  masterId: string | null;
  master?: Master | null;
}

export interface Appointment {
  id: string;
  clientName: string;
  phone: string;
  date: string;
  time: string;
  status: string;
  notes: string | null;
  masterId: string;
  serviceId: string;
  master?: Master;
  service?: Service;
}
