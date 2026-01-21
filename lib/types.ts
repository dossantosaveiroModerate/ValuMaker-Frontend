export interface User {
  id: string;
  email: string;
  username: string;
  profileBio?: string;
  profileSkills?: string[];
  avatarUrl?: string;
  totalYpInvested: number;
  currentYpBalance: number;
  currentStockPrice: number;
  totalMarketCap: number;
  createdAt: string;
  updatedAt: string;
}

export interface Post {
  id: string;
  userId: string;
  content: string;
  imageUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Investment {
  id: string;
  investorId: string;
  investedUserId: string;
  amountYp: number;
  investedAtStockPrice: number;
  investedAt: string;
}

export interface Shareholder {
  id: string;
  username: string;
  amountYp: number;
  investedAt: string;
  isOldest: boolean;
}

export interface StockPriceData {
  date: string;
  price: number;
}

export interface RankingItem {
  id: string;
  username: string;
  currentStockPrice: number;
  totalMarketCap: number;
  avatarUrl?: string;
}
