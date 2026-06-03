import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jeffrey Peasah Darkwah | IT Support Engineer",
  description:
    "Professional profile for Jeffrey Peasah Darkwah, IT Support Engineer focused on systems support, Active Directory, Intune MDM, service operations, and audit-ready IT delivery.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
