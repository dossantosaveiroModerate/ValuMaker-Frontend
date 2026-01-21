import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const notoSansJp = Noto_Sans_JP({ subsets: ["japanese"], variable: "--font-noto-sans-jp" });

export const metadata: Metadata = {
  title: "Valu-Maker",
  description: "人材価値共有SNS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${inter.variable} ${notoSansJp.variable}`}>
      <body>
        <div className="flex flex-col min-h-screen bg-background text-foreground font-sans">
          {/* Header */}
          <header className="bg-primary text-white p-4 shadow-md">
            <nav className="container mx-auto flex justify-between items-center">
              <h1 className="text-h2 font-bold">Valu-Maker</h1>
              <div className="flex space-x-4">
                {/* ナビゲーションリンクのプレースホルダー */}
                <a href="#" className="hover:underline">ホーム</a>
                <a href="#" className="hover:underline">ポートフォリオ</a>
                <a href="#" className="hover:underline">投稿</a>
                <a href="#" className="hover:underline">ランキング</a>
                <a href="#" className="hover:underline">マイページ</a>
              </div>
            </nav>
          </header>

          {/* Main Content */}
          <main className="flex-grow container mx-auto p-4">
            {children}
          </main>

          {/* Footer */}
          <footer className="bg-muted text-muted-foreground p-4 text-center shadow-inner">
            <p>&copy; 2026 Valu-Maker. All rights reserved.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
