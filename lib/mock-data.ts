import { User, Post, Investment } from "@/lib/types"; // 後で作成するtypes.tsを参照

export const mockUsers: User[] = [
  {
    id: "user-sato-kenta",
    email: "kenta.sato@example.com",
    username: "kenta_sato",
    profileBio: "地方創生を目指す大学2年生。農業×ITで地域活性化に挑戦中！",
    profileSkills: ["農業IT", "経営学", "地方創生"],
    avatarUrl: "https://i.pravatar.cc/150?img=1",
    totalYpInvested: 5000,
    currentYpBalance: 10000, // Placeholder, will be managed by auth
    currentStockPrice: 150.0,
    totalMarketCap: 750000,
    createdAt: "2025-01-01T00:00:00Z",
    updatedAt: "2026-01-21T10:00:00Z",
  },
  {
    id: "user-tanaka-yuko",
    email: "yuko.tanaka@example.com",
    username: "yuko_tanaka",
    profileBio: "Webマーケター。新しい才能の発掘が趣味。",
    profileSkills: ["Webマーケティング", "データ分析", "デザイン"],
    avatarUrl: "https://i.pravatar.cc/150?img=2",
    totalYpInvested: 3000,
    currentYpBalance: 8000,
    currentStockPrice: 120.0,
    totalMarketCap: 360000,
    createdAt: "2025-01-15T00:00:00Z",
    updatedAt: "2026-01-20T14:30:00Z",
  },
  {
    id: "user-yamada-taro",
    email: "taro.yamada@example.com",
    username: "taro_yamada",
    profileBio: "AIエンジニアを目指す高専生。画像認識の研究に没頭中。",
    profileSkills: ["AI", "Python", "画像認識"],
    avatarUrl: "https://i.pravatar.cc/150?img=3",
    totalYpInvested: 8000,
    currentYpBalance: 12000,
    currentStockPrice: 200.0,
    totalMarketCap: 1600000,
    createdAt: "2025-02-01T00:00:00Z",
    updatedAt: "2026-01-21T16:00:00Z",
  },
];

export const mockPosts: Post[] = [
  {
    id: "post-1",
    userId: "user-sato-kenta",
    content: "今日の目標設定：農業ITの市場調査を完了させる。",
    imageUrl: null,
    createdAt: "2026-01-21T08:00:00Z",
    updatedAt: "2026-01-21T08:00:00Z",
  },
  {
    id: "post-2",
    userId: "user-tanaka-yuko",
    content: "新しい才能を発掘すべく、Under Valuedタブを巡回中！",
    imageUrl: null,
    createdAt: "2026-01-21T09:00:00Z",
    updatedAt: "2026-01-21T09:00:00Z",
  },
  {
    id: "post-3",
    userId: "user-sato-kenta",
    content: "市場調査完了！農家さんの高齢化と後継者不足が深刻な課題だと改めて認識しました。",
    imageUrl: "https://picsum.photos/600/400?random=1",
    createdAt: "2026-01-21T12:30:00Z",
    updatedAt: "2026-01-21T12:30:00Z",
  },
  {
    id: "post-4",
    userId: "user-yamada-taro",
    content: "画像認識モデルの精度が95%を超えました！次はリアルタイム処理に挑戦します。",
    imageUrl: "https://picsum.photos/600/400?random=2",
    createdAt: "2026-01-21T16:00:00Z",
    updatedAt: "2026-01-21T16:00:00Z",
  },
];

export const mockInvestments: Investment[] = [
  {
    id: "invest-1",
    investorId: "user-tanaka-yuko",
    investedUserId: "user-sato-kenta",
    amountYp: 10,
    investedAtStockPrice: 100.0,
    investedAt: "2026-01-21T08:20:00Z",
  },
  {
    id: "invest-2",
    investorId: "user-tanaka-yuko",
    investedUserId: "user-sato-kenta",
    amountYp: 10,
    investedAtStockPrice: 100.0,
    investedAt: "2026-01-21T08:21:00Z",
  },
  {
    id: "invest-3",
    investorId: "user-yamada-taro",
    investedUserId: "user-sato-kenta",
    amountYp: 50,
    investedAtStockPrice: 110.0,
    investedAt: "2026-01-21T10:00:00Z",
  },
];

export const mockShareholders = [
  {
    id: "user-tanaka-yuko",
    username: "yuko_tanaka",
    amountYp: 200, // 総投資額
    investedAt: "2026-01-21T08:20:00Z",
    isOldest: true,
  },
  {
    id: "user-yamada-taro",
    username: "taro_yamada",
    amountYp: 150,
    investedAt: "2026-01-21T10:00:00Z",
    isOldest: false,
  },
];

export const mockStockPriceHistory = [
  { date: "2026-01-15", price: 100.0 },
  { date: "2026-01-16", price: 100.0 },
  { date: "2026-01-17", price: 105.0 },
  { date: "2026-01-18", price: 105.0 },
  { date: "2026-01-19", price: 110.0 },
  { date: "2026-01-20", price: 115.0 },
  { date: "2026-01-21", price: 120.0 },
];

export const mockRanking = [
  {
    id: "user-yamada-taro",
    username: "taro_yamada",
    currentStockPrice: 200.0,
    totalMarketCap: 1600000,
    avatarUrl: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: "user-sato-kenta",
    username: "kenta_sato",
    currentStockPrice: 150.0,
    totalMarketCap: 750000,
    avatarUrl: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: "user-tanaka-yuko",
    username: "yuko_tanaka",
    currentStockPrice: 120.0,
    totalMarketCap: 360000,
    avatarUrl: "https://i.pravatar.cc/150?img=2",
  },
];
