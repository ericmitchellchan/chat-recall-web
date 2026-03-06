import type { Metadata } from "next";
import Providers from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chat Recall — Switch AIs. Keep everything.",
  description:
    "Make your ChatGPT history searchable in Claude. Upload once, search forever.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-neutral-950 text-neutral-100 antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
