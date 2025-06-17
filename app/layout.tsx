// import type { Metadata } from "next";
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

// ✅ デフォルトOGP画像
// const defaultOGP = "https://meshiden.jp/ogp-default.jpg";

// // ✅ メタデータを動的に生成
// export async function generateMetadata(
//   { params }: { params: { id?: string } }
// ): Promise<Metadata> {
//   const baseUrl = "https://meshiden.jp";
//   let ogImage = defaultOGP;
//   let title = "飯田優斗｜ポートフォリオサイト";
//   let description = "フロントエンドエンジニア兼UIデザイナー、飯田優斗のポートフォリオサイトです。";
//   let url = baseUrl;

//   return {
//     title,
//     description,
//     openGraph: {
//       title,
//       description,
//       url,
//       images: [{ url: ogImage }],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title,
//       description,
//       images: [ogImage],
//     },
//   };
// }

// ✅ ルートレイアウトコンポーネント
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
