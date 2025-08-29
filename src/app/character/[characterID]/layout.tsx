import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Character Details",
  description: "Detailed information about a specific character.",
};

export default function CharacterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}