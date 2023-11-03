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


const NavBar = () => {
    const {status, data: session} = useSession();
    return (
        <>
            <div
                className={navBarStyle}>
                {leftNavBar()}
                <div className="flex-grow"/>
                {rightNavBar(status, session)}
            </div>
        </>
    );

    function leftNavBar() {
        return (
            <><Image src={logo}
                     alt={"Jerry's logo."}
                     width="0"
                     height="0"
                     sizes="20vw"
                     className="w-5 h-5 mt-0 align-middle"></Image>
                <div className="space-x-3 pl-1 text-xs align-text-bottom font-semibold">
                    {
                        navBarLeftItems.map((item, index) => (
                            <Link className="whitespace-nowrap hover:underline" href={item.href}
                                  key={index}>{item.icon}{item.name}</Link>
                        ))
                    }
                </div>
            </>
        )
    }


    function rightNavBar(status: string | null, session: Session | null) {
        return (
            <div className="space-x-3 font-semibold pr-4 text-xs ">

                {status === 'authenticated' && (
                    <Link className="whitespace-nowrap" href={'/users/editprofile/'}>
                        <BsPersonVcard className={iconClass}/>{session!.user!.name}</Link>
                )}

                {status === 'authenticated' && (
                    <Link className="whitespace-nowrap" href={'/admin/'}>
                        <BiSlider className={iconClass}/>Admin</Link>
                )}

                {status === 'authenticated' && (
                    <Link className="whitespace-nowrap" href={"/api/auth/signout"}>
                        <FaArrowCircleRight className={iconClass}/>Sign Out</Link>
                )}
                {(status !== 'authenticated' || null) && (
                    <Link className="whitespace-nowrap" href={"/api/auth/signin"}>
                        <FaArrowCircleRight className={iconClass}/>Sign In</Link>
                )}
            </div>
        );
    }
};

export default NavBar;