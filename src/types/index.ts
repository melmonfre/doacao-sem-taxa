// Types for backend integration preparation

export interface User {
  id: string;
  name: string;
  email: string;
  username: string;
  createdAt: string;
}

export interface Campaign {
  id: string;
  title: string;
  description: string;
  targetAmount: number;
  currentAmount: number;
  slug: string;
  pixKey: string;
  imageUrl?: string;
  userId: string;
  user?: User;
  createdAt: string;
  updatedAt: string;
}

export interface Donation {
  id: string;
  campaignId: string;
  donorName?: string;
  amount: number;
  receiptUrl?: string;
  confirmed: boolean;
  createdAt: string;
}

export interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (data: RegisterData) => Promise<void>;
  logout: () => void;
}

export interface RegisterData {
  name: string;
  email: string;
  username: string;
  password: string;
}

export interface CreateCampaignData {
  title: string;
  description: string;
  targetAmount: number;
  pixKey: string;
  image?: File;
}

export interface DonationData {
  donorName?: string;
  amount: number;
  receipt?: File;
}