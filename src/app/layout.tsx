import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider ,SignedIn, SignedOut, SignIn, UserButton} from "@clerk/nextjs";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="flex justify-between">
          <h1> </h1>
          <UserButton showName />
        </header>
        <main>
          <SignedOut>
           <div className="h-screen flex items-center justify-center">
           <SignIn routing="hash"/>
            </div> 
          
          </SignedOut>
        <SignedIn>
             {children}
      </SignedIn>
        </main>
        
      </body>
    </html>
    </ClerkProvider>
  );
}
