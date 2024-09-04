import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TicTacToeContextProvider from "@/contexts/TicTacToeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Tic tac toe",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<body className={inter.className}>
				<TicTacToeContextProvider>{children}</TicTacToeContextProvider>
			</body>
		</html>
	);
}
