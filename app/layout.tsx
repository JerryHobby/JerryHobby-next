import './globals.css'
import type {Metadata} from 'next'
import {Inter, Roboto} from 'next/font/google'
import localFont from 'next/font/local'
import NavBar from "@/app/components/NavBar";
import AuthProvider from "@/app/auth/provider";
import GoogleAnalytics from "@/app/GoogleAnalytics";
import {Container} from "@react-email/components";
import Footer from "@/app/components/Footer";

const inter = Inter({subsets: ['latin']})
const roboto = Roboto({
    subsets: ['latin'],
    weight: ['100', '300', '400', '500', '700', '900']
})

const poppins = localFont({
    src: '../public/fonts/Poppins/Poppins-Regular.ttf',
    variable: '--font-poppins',
})
export const metadata: Metadata = {
    title: 'JerryHobby.com - Professional Software Engineer',
    description: 'Personal home page of Jerry Hobby, a professional software engineer based in Houston, TX.',
}

export function RootLayout({
                               children,
                           }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" data-theme="winter">
        <GoogleAnalytics/>
        <body className={poppins.variable}>
        <AuthProvider>
            <NavBar/>
            <Container className="scroll-auto">
                <main className='p-0 scroll-smooth'>{children}</main>
            </Container>
        </AuthProvider>
        </body>
        </html>
    )
}

export default function RootLayoutScrollable({
                                                 children,
                                             }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" data-theme="winter">
        <GoogleAnalytics/>
        <body className={poppins.variable}>
        <AuthProvider>
            <header className="sticky top-0 z-50"><NavBar/></header>
            <main className="relative">{children}</main>
            <footer className="sticky bottom-0 z-50"><Footer/></footer>
        </AuthProvider>
        </body>
        </html>
    )
}