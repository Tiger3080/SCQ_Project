import './globals.css'
import {CssBaseline } from '@mui/material';
import { Jost } from "next/font/google";

import "tailwindcss/tailwind.css";
const jost = Jost({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <CssBaseline />
      <body className={jost.className}>{children}</body>
    </html>
  )
}
