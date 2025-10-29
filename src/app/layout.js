import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import NextAuthSessionProvider from "@/Providers/NextAuthSessionProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const popins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"]
})

export const metadata = {
  title: {
    default: "Learning NextJS",
    template: "%s | Learning NextJS"
  },
  keywords: ["Next.Js","React","JavaScript", "Learning", "PlayGround"],
  description: "Trying to Learning NextJS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <NextAuthSessionProvider>

      <body
        className={`${popins.className} antialiased`}
      >
        <NavBar></NavBar>
        <main className=" ">{children}</main>

        <footer className="text-center bg-slate-500">Next Js Project</footer>
      </body>
      </NextAuthSessionProvider>
    </html>
  );
}
