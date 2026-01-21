import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"], // ダークモード対応
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6C63FF", // バイオレット系
        secondary: "#00C2B0", // ターコイズ系
        accent: "#FFC107", // アンバー系
        background: "#F7F8FA", // ライトグレー
        foreground: "#4A4A4A", // ダークグレー
        muted: "#B0B0B0", // ミディアムグレー (補助テキスト用)
        border: "#E0E0E0", // 軽めのボーダー色 (仮定)
        card: "#FFFFFF", // カード背景色 (仮定)
        "card-foreground": "#4A4A4A", // カードテキスト色 (仮定)
        // Dark mode colors - design document didn't specify these, so using sensible defaults or variations
        dark: {
          background: "#1a1a1a",
          foreground: "#e0e0e0",
          primary: "#8b84ff", // Slightly lighter primary for dark mode
          secondary: "#33e0cc", // Slightly lighter secondary for dark mode
          accent: "#ffd54f", // Slightly lighter accent for dark mode
          muted: "#888888",
        },
      },
      fontFamily: {
        sans: ["Noto Sans JP", "Inter", "sans-serif"], // タイポグラフィ仮定を反映
        // 必要に応じて、見出し用などの特定のフォントを追加することも可能
      },
      fontSize: {
        "h1": "3rem",
        "h2": "2.25rem",
        "h3": "1.75rem",
        // 他のフォントサイズも定義可能
      },
      spacing: {
        "1": "0.25rem",
        "2": "0.5rem",
        "3": "0.75rem",
        "4": "1rem",
        "5": "1.25rem",
        "6": "1.5rem",
        "7": "1.75rem",
        "8": "2rem",
        "9": "2.25rem",
        "10": "2.5rem",
        "11": "2.75rem",
        "12": "3rem",
        // 必要に応じてさらに定義
      },
    },
  },
  plugins: [],
};
export default config;
