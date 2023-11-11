import type {Metadata} from 'next'
import {Inter} from 'next/font/google';
import './globals.css'
import '@radix-ui/themes/styles.css';
import './theme-config.css'
import './reactMarkdown.css';
import {Container, Theme} from '@radix-ui/themes';
import {Footer, NavBar} from "@/app/components";
import AuthProvider from "@/app/auth/AuthProvider";

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
});

export const metadata: Metadata = {
    title: 'JerryHobby.com - Jerry Hobby',
    description: 'Personal website for Jerry Hobby.',
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={inter.variable}>
        <body className={inter.className}>
        <AuthProvider>
            <Theme accentColor='violet'>
                <header className="sticky top-0 z-50"><NavBar/></header>
                <Container className='content-center'>
                    {children}
                </Container>
                <Footer/>
            </Theme>
        </AuthProvider>
        </body>
        </html>
    )
}
