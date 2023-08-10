import clsx from "clsx";
import "./styles/core/global.css";
import { defaultTheme, responsiveTheme } from "./styles/theme.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx(defaultTheme, responsiveTheme)}>{children}</body>
    </html>
  );
}
