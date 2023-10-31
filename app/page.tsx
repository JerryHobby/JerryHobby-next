'use client'

import {getServerSession} from "next-auth";
import {nextAuthOptions} from "@/app/api/auth/[...nextauth]/route";
import dynamic from "next/dynamic";
import {useState} from "react";
import {useSession} from "next-auth/react";
import Title from "@/app/components/Title";
import {FaHome} from "react-icons/fa";

const HeavyComponent = dynamic(
    () => import('./components/HeavyComponent'),
    {
        ssr: false,
        loading: () => <p>Loading...</p>
    }
);

export default function Home() {
    // this pulls a session on the server side
    const session =  useSession();
    const [isVisible, setIsVisible] = useState(false);

    const users = [
        {name: 'Jerry', age: 50},
        {name: 'Sally', age: 40},
        {name: 'Bob', age: 30},
        {name: 'Jill', age: 20},
        {name: 'Jack', age: 10},
    ]
    return (
        <main>
            <Title title = 'Jerry Hobby' icon ='home'></Title>

            <h1>Hello {session && session.data?.user?.name}</h1>

            {isVisible && <HeavyComponent/>}
            <button onClick={() => setIsVisible(!isVisible)}>Show</button>
            <br/>
            <button onClick={async () => {
                const _ = (await import('lodash')).default
                console.log(_.orderBy(users, ['name']));
            }
            } >Users by name</button>
            <br/>
            <button onClick={async () => {
                const _ = (await import('lodash')).default
                console.log(_.orderBy(users, ['age']));
            }
            } >Users by age</button>
        </main>
    )
}
