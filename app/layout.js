import "./globals.css";

export const metadata = {
  title: "OnlyAds",
  description: "You are merely data",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
