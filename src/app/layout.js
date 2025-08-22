import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export const metadata = {
	title: "brad hendrickson",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${geistMono.variable} antialiased`}
				style={{
					fontFamily: 'Helvetica, Arial, sans-serif',
					minHeight: '100vh',
					margin: 0,
					background: 'url(/background.jpeg) no-repeat center center fixed',
					backgroundSize: 'cover'
				}}
			>
				{children}
			</body>
		</html>
	);
}
