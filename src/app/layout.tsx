import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Layout } from "@/components";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maria Acolhe",
  description:
    "Projeto dedicado ao acolhimento e suporte humanizado, promovendo cuidado e dignidade.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <meta property="og:title" content="Maria Acolhe" />
        <meta property="og:description" content="Projeto dedicado ao acolhimento e suporte humanizado." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mariaacolhe.com" />
        <meta property="og:image" content="https://www.mariaacolhe.com/og-image.png" />
        <link rel="shortcut icon" href="/image/maria-acolhe-icon.png" type="image/png" />
      </head>
      <body className={roboto.className}>
        <Layout>
          {children}        
        </Layout>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
          integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </body>
    </html>
  );
}
