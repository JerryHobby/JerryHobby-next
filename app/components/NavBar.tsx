'use client'
import React from 'react';
import {useSession} from "next-auth/react";

import Image from "next/image";
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import classNames from 'classnames';
import {CaretDownIcon} from '@radix-ui/react-icons';
import {Session} from "next-auth";

const iconClass = 'inline align-text-top text-md mr-1';
const logo = "/jh2.png";


const dropTriggerClassName = "text-violet11 hover:bg-violet3 focus:shadow-violet7 group flex select-none items-center justify-between gap-[2px] rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none outline-none focus:shadow-[0_0_0_2px]";
const caretClassName = "text-violet10 relative top-[1px] transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180";
const navContentClassName = "data-[motion=from-start]:animate-enterFromLeft data-[motion=from-end]:animate-enterFromRight data-[motion=to-start]:animate-exitToLeft data-[motion=to-end]:animate-exitToRight absolute top-0 left-0 w-full sm:w-auto"
const ul1ColClassName = "border-2 bg-gray-50 one m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[500px] sm:grid-cols-[0.75fr_1fr]";
const ul2ColClassName = "border-2 bg-gray-50 m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[300px] sm:grid-flow-col sm:grid-rows-2";

const basicNavItem = (title: string, href: string) => {
    const linkClassName = "text-violet11 hover:underline focus:shadow-violet7 block select-none rounded-[4px] px-3 py-2 text-[15px] font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]";
    return (
        <NavigationMenu.Item>
            <NavigationMenu.Link
                className={linkClassName}
                href={href}>
                {title}
            </NavigationMenu.Link>
        </NavigationMenu.Item>)
}
const aboutJerryNav = () => {
    return (
        <NavigationMenu.Item>
            <NavigationMenu.Trigger className={dropTriggerClassName}>
                About Jerry
                <CaretDownIcon
                    className={caretClassName}
                    aria-hidden
                />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className={navContentClassName}>
                <ul className={ul1ColClassName}>
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
    )
}

const projectsNav = () => {
    return (
        <NavigationMenu.Item>
            <NavigationMenu.Trigger className={dropTriggerClassName}>
                Projects
                <CaretDownIcon
                    className={caretClassName}
                    aria-hidden
                />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="absolute top-0 left-0 w-full sm:w-auto">
                <ul className={ul1ColClassName}>
                    <ListItem title="Airport Search Tool" href="/airports">
                        Search global airports to find codes, locations, etc.
                    </ListItem>
                    <ListItem title="Demo Projects" href="/projects">
                        Several demo projects in various languages.
                    </ListItem>
                    <ListItem title="Build Process" href="/buildProcess">
                        Tools and processes used to build this site and multi-platform apps.
                    </ListItem>
                </ul>
            </NavigationMenu.Content>
        </NavigationMenu.Item>
    )
}

const userNav = (status: string, session: Session) => {

    const admin = session.user?.email === "jerry@anythinginternet.com" ? true : false;


    return (
        (!session || null)
        && (basicNavItem("Sign In", "/api/auth/signin"))
        ||

        <NavigationMenu.Item>
            <NavigationMenu.Trigger className={dropTriggerClassName + " relative"}>

                {session.user?.name || "User Menu"}
                <CaretDownIcon
                    className={caretClassName}
                    aria-hidden
                />
            </NavigationMenu.Trigger>
            <NavigationMenu.Content className="absolute top-0 left-0 w-full sm:w-auto">
                <ul className={ul2ColClassName + " relative"}>
                    {(admin) && adminMenu()}
                    <ListItem title="Log out" href="/api/auth/signout">
                        End your session.
                    </ListItem>
                </ul>
            </NavigationMenu.Content>
        </NavigationMenu.Item>
    );
}

const adminMenu = () => {
    return (
        <>
            <ListItem title="Post Article" href="/articles/new">
                Post an article.
            </ListItem>
            <ListItem title="Post Project" href="/projects/new">
                Post a project.
            </ListItem>
        </>
    )
}


const NavBar = () => {
    const {status, data: session} = useSession();
    const navBarClassName = "center m-0 flex list-none rounded-[6px] bg-gray-50 p-1 shadow-gray-500 shadow-[0_1px_3px]"

    return (
        <NavigationMenu.Root className="relative z-[1] flex w-screen justify-center">
            <NavigationMenu.List className={navBarClassName}>
                {basicNavItem("Home", "/")}
                {basicNavItem("Articles", "/articles")}
                {aboutJerryNav()}
                {projectsNav()}
                {basicNavItem("Contact", "/contact")}

                {(!session || null)
                    && basicNavItem("Sign In", "/api/auth/signin")
                    || userNav(status, session!)
                }

                <NavigationMenu.Indicator
                    className="data-[state=visible]:animate-fadeIn data-[state=hidden]:animate-fadeOut top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]">
                    <div className="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-white"/>
                </NavigationMenu.Indicator>
            </NavigationMenu.List>

            <div className="perspective-[2000px] absolute top-full left-0 flex w-full justify-center">
                <NavigationMenu.Viewport
                    className="data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[10px] h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-[6px] bg-white transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]"/>
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

const ListItem = React.forwardRef(({href, title, children, className}: Props, ref) => {
    const subNavLinkClassName = '!font-semi-bold focus:shadow-[0_0_0_2px] focus:shadow block select-none rounded-[6px] p-3 text-[15px] leading-none no-underline outline-none transition-colors';
    const subNavTitleClassName = "hover:underline mb-[5px] !font-semibold leading-[1.2]";
    return (
        <li>
            <NavigationMenu.Link asChild>
                <a
                    className={classNames(
                        subNavLinkClassName,
                        {className}
                    )}
                    href={href}
                >
                    <div
                        className={subNavTitleClassName}>{title}</div>
                    <p className="!text-gray-500 leading-[1.4]">{children}</p>
                </a>
            </NavigationMenu.Link>
        </li>
    );
});

ListItem.displayName = 'ListItem';
export default NavBar;
