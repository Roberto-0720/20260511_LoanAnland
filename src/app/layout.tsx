import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ZaloButton from "@/components/ui/ZaloButton";

export const metadata: Metadata = {
  title: {
    default: "LoanAnLand — Chuyên Anland Nam Cường & The Charm An Hưng",
    template: "%s | LoanAnLand",
  },
  description:
    "Chuyên tâm từng căn — An cư vững bước. Đỗ Thị Loan — Chuyên gia bất động sản khu vực Anland Nam Cường & The Charm An Hưng, Hà Đông, Hà Nội. LH: 0389980626",
  keywords: [
    "bất động sản",
    "Anland Nam Cường",
    "The Charm An Hưng",
    "căn hộ Hà Đông",
    "mua bán căn hộ",
    "cho thuê căn hộ",
    "LoanAnLand",
    "Hà Nội",
  ],
  openGraph: {
    title: "LoanAnLand — Chuyên Anland Nam Cường & The Charm An Hưng",
    description:
      "Chuyên tâm từng căn — An cư vững bước. LH: 0389980626",
    type: "website",
    locale: "vi_VN",
    siteName: "LoanAnLand",
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "google-site-verification": "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ZaloButton />
      </body>
    </html>
  );
}
