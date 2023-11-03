'use client'
import React from 'react';
import Link from "next/link";
import {FaArrowCircleRight} from "react-icons/fa";
import {BsPersonVcard} from "react-icons/bs";
import {useSession} from "next-auth/react";
import {Session} from "next-auth";
import {
    BiBookAlt,
    BiBuildings,
    BiCodeBlock,
    BiConversation,
    BiCustomize,
    BiFile,
    BiHive,
    BiHome,
    BiSitemap,
    BiSlider
} from "react-icons/bi";

import Image from "next/image";

const iconClass = 'inline align-text-top text-md mr-1';
const navBarGradientGray = "bg-gradient-to-b from-0% via-75% to-100% from-gray-100 via-gray-50 to-gray-100";
//const navBarGradientBlue = "bg-gradient-to-b from-0% via-75% to-100% from-blue-100 via-blue-50 to-blue-100";
const navBarDropShadow = " drop-shadow-[0_2px_3px_rgba(0,0,0,0.1)] border border-b-gray-300";

const navBarStyle = navBarGradientGray + navBarDropShadow + "  flex space-x-1 pl-4 py-3 min-w-full text-xs"

const logo = "/jh2.png";

const navBarLeftItems = [
    {
        name: 'Home',
        href: '/',
        icon: <BiHome className={iconClass}/>
    },
    {
        name: 'Articles',
        href: '/articles',
        icon: <BiBookAlt className={iconClass}/>
    },
    {
        name: 'Leadership',
        href: '/leadership',
        icon: <BiBuildings className={iconClass}/>
    },
    {
        name: 'Technical',
        href: '/technical',
        icon: <BiCodeBlock className={iconClass}/>
    },
    {
        name: 'Experience',
        href: '/experience',
        icon: <BiCustomize className={iconClass}/>
    },
    {
        name: 'Projects',
        href: '/projects',
        icon: <BiHive className={iconClass}/>
    },
    {
        name: 'Build Process',
        href: '/buildProcess',
        icon: <BiSitemap className={iconClass}/>
    },
    {
        name: 'Resume',
        href: '/resume',
        icon: <BiFile className={iconClass}/>
    },
    {
        name: 'Contact',
        href: '/contact',
        icon: <BiConversation className={iconClass}/>
    },
];

//
// const NavBar = () => {
//     const {status, data: session} = useSession();
//     return (
//         <>
//             <div
//                 className={navBarStyle}>
//                 {leftNavBar()}
//                 <div className="flex-grow"/>
//                 {rightNavBar(status, session)}
//             </div>
//         </>
//     );
//
//     function leftNavBar() {
//         return (
//             <><Image src={logo}
//                      alt={"Jerry's logo."}
//                      width="0"
//                      height="0"
//                      sizes="20vw"
//                      className="w-5 h-5 mt-0 align-middle"></Image>
//                 <div className="space-x-3 pl-1 text-xs align-text-bottom font-semibold">
//                     {
//                         navBarLeftItems.map((item, index) => (
//                             <Link className="whitespace-nowrap hover:underline" href={item.href}
//                                   key={index}>{item.icon}{item.name}</Link>
//                         ))
//                     }
//                 </div>
//             </>
//         )
//     }
//
//
//     function rightNavBar(status: string | null, session: Session | null) {
//         return (
//             <div className="space-x-3 font-semibold pr-4 text-xs ">
//
//                 {status === 'authenticated' && (
//                     <Link className="whitespace-nowrap" href={'/users/editprofile/'}>
//                         <BsPersonVcard className={iconClass}/>{session!.user!.name}</Link>
//                 )}
//
//                 {status === 'authenticated' && (
//                     <Link className="whitespace-nowrap" href={'/admin/'}>
//                         <BiSlider className={iconClass}/>Admin</Link>
//                 )}
//
//                 {status === 'authenticated' && (
//                     <Link className="whitespace-nowrap" href={"/api/auth/signout"}>
//                         <FaArrowCircleRight className={iconClass}/>Sign Out</Link>
//                 )}
//                 {(status !== 'authenticated' || null) && (
//                     <Link className="whitespace-nowrap" href={"/api/auth/signin"}>
//                         <FaArrowCircleRight className={iconClass}/>Sign In</Link>
//                 )}
//             </div>
//         );
//     }
// };
//

import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import classNames from 'classnames';
import { CaretDownIcon } from '@radix-ui/react-icons';

const NavBar = () => {
    const {status, data: session} = useSession();
    return (
        <NavigationMenu.Root className="relative z-[1] flex w-screen justify-center">
            <NavigationMenu.List className="center shadow-gray-500 m-0 flex list-none rounded-[6px] bg-gray-50 p-1 shadow-[0_1px_3px]">
                <NavigationMenu.Item>
                    <NavigationMenu.Link
                        className="text-violet11 hover:bg-violet3 focus:shadow-violet7 block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
                        href="/"
                    >
                        Home
                    </NavigationMenu.Link>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                    <NavigationMenu.Link
                        className="text-violet11 hover:bg-violet3 focus:shadow-violet7 block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
                        href="/articles"
                    >
                        Articles
                    </NavigationMenu.Link>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                    <NavigationMenu.Trigger className="text-violet11 hover:bg-violet3 focus:shadow-violet7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
                        About Jerry
                        <CaretDownIcon
                            className="text-violet10 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                            aria-hidden
                        />
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Content className="data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0 w-full sm:w-auto">
                        <ul className="border one m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[500px] sm:grid-cols-[0.75fr_1fr]">
                            <li className="row-span-4 grid align-top">
                                <NavigationMenu.Link asChild>
                                    <div>
                                        <Image src={'/images/jerry_hobby_headshot.png'}
                                               alt={'Jerry Hobby headshot'}
                                               width={200}
                                                  height={300}
                                               className={'rounded p-2'}
                                        />
                                        <div className="mt-2 text-[18px] text-center font-medium text-black">
                                        Jerry Hobby
                                        </div>
                                    </div>
                                </NavigationMenu.Link>
                            </li>
                            <ListItem href="/leadership" title="Leadership">
                                Jerry&apos;s leadership skills.
                            </ListItem>
                            <ListItem href="/technical" title="Technical">
                                Jerry&apos;s technical skills.
                            </ListItem>
                            <ListItem href="/experience" title="Experience">
                                Jerry&apos;s career experience.
                            </ListItem>
                            <ListItem href="/resume" title="Resume">
                                Download one of Jerry&apos;s resumes.
                            </ListItem>
                        </ul>
                    </NavigationMenu.Content>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                    <NavigationMenu.Trigger className="text-violet11 hover:bg-violet3 focus:shadow-violet7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]">
                        Projects
                        <CaretDownIcon
                            className="text-violet10 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                            aria-hidden
                        />
                    </NavigationMenu.Trigger>
                    <NavigationMenu.Content className="absolute top-0 left-0 w-full sm:w-auto">
                        <ul className=" border m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[300px] sm:grid-flow-col sm:grid-rows-2">
                            <ListItem title="Demo Projects" href="/projects">
                                Several demo projects in various languages.
                            </ListItem>
                            <ListItem title="Build Process" href="/buildProcess">
                                Tools and processes used to build this site and multi-platform apps.
                            </ListItem>
                        </ul>
                    </NavigationMenu.Content>
                </NavigationMenu.Item>

                <NavigationMenu.Item>
                    <NavigationMenu.Link
                        className="text-violet11 hover:bg-violet3 focus:shadow-violet7 block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
                        href="/contact"
                    >
                        Contact
                    </NavigationMenu.Link>
                </NavigationMenu.Item>

                {(status !== 'authenticated' || null) && (
                    <NavigationMenu.Item>
                        <NavigationMenu.Link
                            className="text-violet11 hover:bg-violet3 focus:shadow-violet7 block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
                            href="/api/auth/signin"
                        >
                            Sign In
                        </NavigationMenu.Link>
                    </NavigationMenu.Item>
                )}
                {(status === 'authenticated' || null) && (
                    <NavigationMenu.Item>
                        <NavigationMenu.Link
                            className="text-violet11 hover:bg-violet3 focus:shadow-violet7 block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
                            href="/api/auth/signout"
                        >
                            Sign Out
                        </NavigationMenu.Link>
                    </NavigationMenu.Item>
                )}


                <NavigationMenu.Indicator className="data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]">
                    <div className="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-white" />
                </NavigationMenu.Indicator>
            </NavigationMenu.List>

            <div className="perspective-[2000px] absolute top-full left-0 flex w-full justify-center">
                <NavigationMenu.Viewport className="data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[6px] bg-white transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]" />
            </div>
        </NavigationMenu.Root>
    );
};

interface Props {
    href: string;
    title: string;
    children: React.ReactNode;
    className?: string;
}

const ListItem = React.forwardRef(({href, title, children, className}: Props) => (
    <li>
        <NavigationMenu.Link asChild>
            <a
                className={classNames(
                    'focus:shadow-[0_0_0_2px] focus:shadow-violet7 hover:!bg-mauve3 block select-none rounded-[6px] p-3 text-[15px] leading-none no-underline outline-none transition-colors',
                    {className}
                )}
                href={href}
            >
                <div className="hover:underline !text-violet12 mb-[5px] font-extrabold! leading-[1.2]">{title}</div>
                <p className="!text-mauve11 !font-extrabold leading-[1.4]">{children}</p>
            </a>
        </NavigationMenu.Link>
    </li>
));

ListItem.displayName = 'ListItem';
export default NavBar;
