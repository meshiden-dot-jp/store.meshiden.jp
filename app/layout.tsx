import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";
import Script from "next/script";

// ✅ フォント設定（Noto Sans JP）
const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

// ✅ 静的メタデータ（OGP含む）
export const metadata: Metadata = {
  title: "飯田優斗｜オフィシャルストア",
  description: "フロントエンドエンジニア兼UIデザイナー、飯田優斗のオフィシャルストアです。",
  openGraph: {
    title: "飯田優斗｜オフィシャルストア",
    description: "フロントエンドエンジニア兼UIデザイナー、飯田優斗のオフィシャルストアです。",
    url: "https://meshiden.jp",
    images: [{ url: "https://meshiden.jp/ogp-default.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "飯田優斗｜オフィシャルストア",
    description: "フロントエンドエンジニア兼UIデザイナー、飯田優斗のオフィシャルストアです。",
    images: ["https://meshiden.jp/ogp-default.jpg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/rvs7vvb.css" />
      </head>
      <body className={`${notoSansJP.variable} antialiased flex min-h-screen flex-col`}>
        <Header />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
        {/* ✅ FontAwesome のスクリプト */}
        <Script src="https://kit.fontawesome.com/4e6b2556d7.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
