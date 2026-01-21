import { mockPosts, mockUsers } from "@/lib/mock-data";
import { Post, User } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

interface PostCardProps {
  post: Post;
  author: User;
}

const PostCard: React.FC<PostCardProps> = ({ post, author }) => (
  <div className="bg-card p-4 rounded-lg shadow-sm mb-4 border border-border">
    <div className="flex items-center mb-3">
      <Link href={`/user/${author.id}`}>
        <Image
          src={author.avatarUrl || "/default-avatar.png"}
          alt={author.username}
          width={40}
          height={40}
          className="rounded-full mr-3"
        />
      </Link>
      <div>
        <Link href={`/user/${author.id}`}>
          <p className="font-bold text-foreground hover:underline">{author.username}</p>
        </Link>
        <p className="text-muted-foreground text-sm">
          {new Date(post.createdAt).toLocaleString()}
        </p>
      </div>
    </div>
    <p className="text-foreground mb-3">{post.content}</p>
    {post.imageUrl && (
      <Image
        src={post.imageUrl}
        alt="Post image"
        width={600}
        height={400}
        className="rounded-lg w-full object-cover"
      />
    )}
    {/* TODO: Add interaction buttons like comment, share, etc. */}
  </div>
);

export default function HomePage() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-h2 font-bold text-foreground mb-6">タイムライン</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {mockPosts.map((post) => {
          const author = mockUsers.find((user) => user.id === post.userId);
          if (!author) return null;
          return <PostCard key={post.id} post={post} author={author} />;
        })}
      </div>
    </div>
  );
}
