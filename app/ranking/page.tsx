import { mockRanking, mockUsers } from "@/lib/mock-data";
import { RankingItem, User } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import React from 'react';

interface RankingCardProps {
  item: RankingItem;
  index: number;
}

const RankingCard: React.FC<RankingCardProps> = ({ item, index }) => {
  const rankColorClass = 
    index === 0 ? "text-yellow-500" : 
    index === 1 ? "text-gray-400" : 
    index === 2 ? "text-amber-700" : 
    "text-muted-foreground";

  return (
    <Link href={`/user/${item.id}`} className="block bg-card p-4 rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <span className={`text-xl font-bold mr-4 ${rankColorClass}`}>
            #{index + 1}
          </span>
          <Image
            src={item.avatarUrl || "/default-avatar.png"}
            alt={item.username}
            width={50}
            height={50}
            className="rounded-full mr-3"
          />
          <div>
            <p className="font-bold text-lg text-foreground">{item.username}</p>
            <p className="text-muted-foreground text-sm">@{item.username}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-h3 font-bold text-primary">{item.currentStockPrice} YP</p>
          <p className="text-muted-foreground text-sm">時価総額: {item.totalMarketCap} YP</p>
        </div>
      </div>
    </Link>
  );
};

export default function RankingPage() {
  const [selectedTab, setSelectedTab] = React.useState("時価総額"); // 仮定: デフォルトは時価総額

  // For simplicity, all tabs use mockRanking for now
  const rankingData = mockRanking;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-h2 font-bold text-foreground mb-6">ランキング</h2>

      <div className="flex justify-center mb-6">
        <div className="bg-card p-1 rounded-full shadow-inner flex space-x-2">
          {[ "時価総額", "急上昇", "新着・急上昇前" ].map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${selectedTab === tab ? "bg-primary text-white shadow" : "text-muted-foreground hover:bg-muted"}`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {rankingData.map((item, index) => (
          <RankingCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </div>
  );
}
