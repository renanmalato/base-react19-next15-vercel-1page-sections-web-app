import { Montserrat, Fraunces } from "next/font/google";
import "@/theme/styles.scss"; // This should import your main styles file that imports fonts.scss
import "@/theme/google-translate.css"; // Import Google Translate CSS
import { ScrollProvider } from "@/context/ScrollContext";
import { Schema } from "@/lib/seo";
import { metadata } from "./metadata";
import GoogleTranslateScript from "@/app/utils/GoogleTranslateScript";


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

export { metadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className={`${montserrat.variable} ${fraunces.variable}`}>
      <body>
        <ScrollProvider>
          {children}
        </ScrollProvider>
        <Schema />
        <GoogleTranslateScript />
      </body>
    </html>
  );
}
