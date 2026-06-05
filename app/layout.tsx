import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://jeffrey-darkwah-visual-cv.workspace-519606.chatgpt-team.site"),
  title: "Jeffrey Peasah Darkwah | Systems Administrator & Cybersecurity Analyst",
  description:
    "Portfolio of Jeffrey Peasah Darkwah, a Systems Administrator and Cybersecurity Analyst focused on Active Directory, Windows Server, Group Policy, IT support, audit-ready operations, and secure infrastructure.",
  keywords: [
    "Jeffrey Peasah Darkwah",
    "Systems Administrator",
    "Cybersecurity Analyst",
    "Active Directory",
    "Windows Server",
    "Group Policy",
    "IT Support",
    "Ghana",
    "IT Service Desk",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: ["/favicon.svg", "/images/favicon.svg"],
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "Jeffrey Peasah Darkwah | Systems Administrator & Cybersecurity Analyst",
    description:
      "Active Directory, Windows Server, Group Policy, IT support, audit-ready operations, and secure infrastructure portfolio.",
    url: "/",
    siteName: "Jeffrey Peasah Darkwah Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jeffrey Peasah Darkwah systems administration and cybersecurity portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jeffrey Peasah Darkwah | Systems Administrator & Cybersecurity Analyst",
    description:
      "Portfolio focused on Active Directory, Windows Server, Group Policy, IT support, and secure infrastructure.",
    images: ["/og-image.png"],
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
