import { mockUsers, mockInvestments, mockRanking } from "@/lib/mock-data";
import { User, Investment, RankingItem } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

interface MyPortfolioItemProps {
  investment: Investment;
  investedUser: User;
}

const MyPortfolioItem: React.FC<MyPortfolioItemProps> = ({ investment, investedUser }) => {
  const currentPrice = investedUser.currentStockPrice;
  const profitLoss = (currentPrice - investment.investedAtStockPrice) * (investment.amountYp / 10); // 仮定: 10YP単位で株を購入
  const isProfit = profitLoss >= 0;

  return (
    <Link href={`/user/${investedUser.id}`} className="block bg-card p-4 rounded-lg shadow-sm mb-3 border border-border hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <Image
            src={investedUser.avatarUrl || "/default-avatar.png"}
            alt={investedUser.username}
            width={50}
            height={50}
            className="rounded-full mr-3"
          />
          <div>
            <p className="font-bold text-lg text-foreground">{investedUser.username}</p>
            <p className="text-muted-foreground text-sm">@{investedUser.username}</p>
          </div>
        </div>
        <p className="text-h3 font-bold text-primary">{currentPrice} YP</p>
      </div>
      <div className="flex justify-between items-center text-sm">
        <p className="text-muted-foreground">投資額: {investment.amountYp} YP</p>
        <p className={`font-bold ${isProfit ? "text-secondary" : "text-destructive"}`}>
          {isProfit ? "含み益:" : "含み損:"} {Math.abs(profitLoss).toFixed(1)} YP
        </p>
      </div>
    </Link>
  );
};

export default function PortfolioPage() {
  // For simplicity, assuming current user is 'user-tanaka-yuko'
  const currentUserId = "user-tanaka-yuko"; // 仮定
  const currentUser = mockUsers.find(u => u.id === currentUserId);

  if (!currentUser) {
    return <div className="text-destructive">ユーザー情報が見つかりません。</div>;
  }

  const userInvestments = mockInvestments.filter(inv => inv.investorId === currentUserId);

  // Calculate total return (simplified)
  const totalReturn = userInvestments.reduce((sum, inv) => {
    const investedUser = mockUsers.find(u => u.id === inv.investedUserId);
    if (!investedUser) return sum;
    const profitLoss = (investedUser.currentStockPrice - inv.investedAtStockPrice) * (inv.amountYp / 10);
    return sum + profitLoss;
  }, 0);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-h2 font-bold text-foreground mb-6">ポートフォリオ</h2>

      <div className="bg-card p-6 rounded-lg shadow-md mb-6 border border-border text-center">
        <p className="text-muted-foreground text-lg mb-2">保有YP</p>
        <p className="text-h1 font-bold text-primary mb-4">{currentUser.currentYpBalance} YP</p>
        <p className="text-muted-foreground text-lg mb-2">トータルリターン</p>
        <p className={`text-h2 font-bold ${totalReturn >= 0 ? "text-secondary" : "text-destructive"}`}>
          {totalReturn >= 0 ? "+" : ""}{totalReturn.toFixed(1)} YP
        </p>
      </div>

      <div className="bg-card p-6 rounded-lg shadow-md mb-6 border border-border">
        <h3 className="text-h3 font-bold text-foreground mb-4">あなたの目利き成績ランキング</h3>
        {/* For simplicity, just showing a placeholder rank */}
        <p className="text-muted-foreground text-lg">現在 <span className="text-primary font-bold">15</span> 位 / {mockUsers.length}人中</p>
      </div>

      <h3 className="text-h3 font-bold text-foreground mb-4">保有銘柄</h3>
      <div className="space-y-4">
        {userInvestments.length > 0 ? (
          userInvestments.map((investment) => {
            const investedUser = mockUsers.find(u => u.id === investment.investedUserId);
            if (!investedUser) return null;
            return (
              <MyPortfolioItem
                key={investment.id}
                investment={investment}
                investedUser={investedUser}
              />
            );
          })
        ) : (
          <p className="text-muted-foreground">まだ投資している銘柄はありません。</p>
        )}
      </div>
    </div>
  );
}
