import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { LanguageProvider } from "@/components/LanguageProvider";
import { Preloader } from "@/components/Preloader";
import { cookies } from "next/headers";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mr. Handy",
  description: "House Maintenance, One Click Away",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const isLoggedIn = cookieStore.has("userId");

  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <Preloader />
        <LanguageProvider>
          <Header isLoggedIn={isLoggedIn} />
          <main className="mx-auto max-w-[95%] relative">
            <PageTransition>
              {children}
            </PageTransition>
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
