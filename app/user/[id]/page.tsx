import { mockUsers, mockShareholders, mockStockPriceHistory, mockPosts } from "@/lib/mock-data";
import { User, Shareholder, StockPriceData, Post } from "@/lib/types";
import Image from "next/image";
import { notFound } from "next/navigation";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface UserProfilePageProps {
  params: { id: string };
}

// Placeholder for ProfileCard Component
const ProfileCard: React.FC<{ user: User; isOwnProfile: boolean }> = ({ user, isOwnProfile }) => (
  <div className="bg-card p-6 rounded-lg shadow-md mb-6 border border-border">
    <div className="flex items-center mb-4">
      <Image
        src={user.avatarUrl || "/default-avatar.png"}
        alt={user.username}
        width={80}
        height={80}
        className="rounded-full mr-4 border-2 border-primary"
      />
      <div>
        <h1 className="text-h1 font-bold text-foreground">{user.username}</h1>
        <p className="text-muted-foreground text-lg">@{user.username}</p>
      </div>
    </div>
    <p className="text-foreground mb-4 text-base">{user.profileBio}</p>
    {user.profileSkills && user.profileSkills.length > 0 && (
      <div className="flex flex-wrap gap-2 mb-4">
        {user.profileSkills.map((skill, index) => (
          <span
            key={index}
            className="bg-secondary text-white text-sm px-3 py-1 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    )}
    <div className="flex justify-between items-center mt-4">
      <div>
        <p className="text-muted-foreground text-sm">現在の株価</p>
        <p className="text-h2 font-bold text-primary">{user.currentStockPrice} YP</p>
      </div>
      <div>
        <p className="text-muted-foreground text-sm">時価総額</p>
        <p className="text-h2 font-bold text-foreground">{user.totalMarketCap} YP</p>
      </div>
    </div>
    {isOwnProfile && (
      <button className="mt-4 w-full bg-accent text-white py-2 rounded-lg hover:bg-opacity-90 transition-colors">
        プロフィールを編集
      </button>
    )}
  </div>
);

// Placeholder for StockChart Component
const StockChart: React.FC<{ data: StockPriceData[] }> = ({ data }) => {
  // For simplicity, hardcode period selection for now
  const periods = ["日", "週", "月", "年"];
  const [selectedPeriod, setSelectedPeriod] = React.useState("月"); // 仮定: デフォルトは月次

  return (
    <div className="bg-card p-6 rounded-lg shadow-md mb-6 border border-border">
      <h2 className="text-h3 font-bold text-foreground mb-4">株価チャート</h2>
      <div className="flex gap-2 mb-4">
        {periods.map(period => (
          <button
            key={period}
            onClick={() => setSelectedPeriod(period)}
            className={`px-4 py-2 rounded-full text-sm font-medium ${selectedPeriod === period ? "bg-primary text-white" : "bg-muted text-muted-foreground hover:bg-secondary-foreground"}`}
          >
            {period}
          </button>
        ))}
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis dataKey="date" stroke="#888888" />
          <YAxis stroke="#888888" />
          <Tooltip />
          <Line type="monotone" dataKey="price" stroke="#6C63FF" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

// Placeholder for InvestButton Component
const InvestButton: React.FC<{ investedUserId: string; currentStockPrice: number }> = ({ investedUserId, currentStockPrice }) => (
  <button className="bg-primary text-white text-lg font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-opacity-90 transition-colors w-full">
    Invest! ({10} YP) {/* MVPでは固定10YP */}
  </button>
);

// Placeholder for ShareholderList Component
const ShareholderList: React.FC<{ shareholders: Shareholder[] }> = ({ shareholders }) => (
  <div className="bg-card p-6 rounded-lg shadow-md mb-6 border border-border">
    <h2 className="text-h3 font-bold text-foreground mb-4">株主一覧</h2>
    <div className="space-y-3">
      {shareholders.map((shareholder) => (
        <div key={shareholder.id} className="flex items-center justify-between">
          <div className="flex items-center">
            <Image
              src={mockUsers.find(u => u.id === shareholder.id)?.avatarUrl || "/default-avatar.png"}
              alt={shareholder.username}
              width={40}
              height={40}
              className="rounded-full mr-3"
            />
            <p className="font-medium text-foreground">{shareholder.username}</p>
            {shareholder.isOldest && (
              <span className="ml-2 text-xs bg-accent text-white px-2 py-0.5 rounded-full">古参</span>
            )}
          </div>
          <p className="text-secondary font-bold">{shareholder.amountYp} YP</p>
        </div>
      ))}
    </div>
  </div>
);

// Placeholder for PostsList Component
const PostsList: React.FC<{ posts: Post[]; users: User[] }> = ({ posts, users }) => (
  <div className="bg-card p-6 rounded-lg shadow-md mb-6 border border-border">
    <h2 className="text-h3 font-bold text-foreground mb-4">投稿一覧</h2>
    <div className="space-y-4">
      {posts.map((post) => {
        const author = users.find(u => u.id === post.userId);
        if (!author) return null;
        return (
          <div key={post.id} className="border-b border-border pb-4 last:border-b-0">
            <div className="flex items-center mb-2">
              <Image
                src={author.avatarUrl || "/default-avatar.png"}
                alt={author.username}
                width={30}
                height={30}
                className="rounded-full mr-2"
              />
              <p className="font-medium text-foreground">{author.username}</p>
              <p className="text-muted-foreground text-sm ml-2">{new Date(post.createdAt).toLocaleString()}</p>
            </div>
            <p className="text-foreground mb-2">{post.content}</p>
            {post.imageUrl && (
              <Image
                src={post.imageUrl}
                alt="Post image"
                width={400}
                height={300}
                className="rounded-lg w-full object-cover"
              />
            )}
          </div>
        );
      })}
    </div>
  </div>
);

export default function UserProfilePage({ params }: UserProfilePageProps) {
  const userId = params.id;
  const user = mockUsers.find((u) => u.id === userId);

  if (!user) {
    notFound();
  }

  // For simplicity, assuming current user is 'user-tanaka-yuko' for isOwnProfile check
  const currentLoggedInUserId = "user-tanaka-yuko"; // 仮定
  const isOwnProfile = user.id === currentLoggedInUserId;

  const userPosts = mockPosts.filter(post => post.userId === userId);

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <ProfileCard user={user} isOwnProfile={isOwnProfile} />
          <StockChart data={mockStockPriceHistory} />
          <PostsList posts={userPosts} users={mockUsers} />
        </div>
        <div className="lg:col-span-1">
          {!isOwnProfile && (
            <div className="bg-card p-6 rounded-lg shadow-md mb-6 border border-border">
              <InvestButton investedUserId={user.id} currentStockPrice={user.currentStockPrice} />
            </div>
          )}
          <ShareholderList shareholders={mockShareholders} />
        </div>
      </div>
    </div>
  );
}
