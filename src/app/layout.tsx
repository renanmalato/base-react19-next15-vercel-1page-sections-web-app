import type { Metadata } from "next";
import { Montserrat, Fraunces } from "next/font/google";
import "@/theme/styles.scss"; // This should import your main styles file that imports fonts.scss


const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  style: ['normal'],
  weight: ['600'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Musica",
  description: "Your music services website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${fraunces.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
