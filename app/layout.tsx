import './globals.css';
import './reactMarkdown.css';
import type {Metadata} from 'next'
import {Inter, Roboto} from 'next/font/google'
import localFont from 'next/font/local'
import NavBar from "@/app/components/NavBar";
import AuthProvider from "@/app/auth/provider";
import GoogleAnalytics from "@/app/GoogleAnalytics";
import Footer from "@/app/components/Footer";
import '@radix-ui/themes/styles.css';
import {Theme} from '@radix-ui/themes';

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


export default function RootLayoutScrollable({
                                                 children,
                                             }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" data-theme="winter">
        <GoogleAnalytics/>
        <body className={poppins.variable}>
        <Theme>
            <AuthProvider>
                <header className="sticky top-0 z-50"><NavBar/></header>
                <main className="relative">{children}</main>
                <footer className="sticky bottom-0 z-50"><Footer/></footer>
            </AuthProvider>
        </Theme>
        </body>
        </html>
    )
}
