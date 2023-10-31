"use client"
import React, {useState} from 'react';
import {router } from "next/client";
import {useSession} from "next-auth/react";

interface Props {
    params: {
        id: string
    }
}

interface User {
    id: string,
    name: string,
    email: string,
}

const UserDetailPage = ({params: {id}}: Props) => {

    const [user, setUser] = useState({} as User);

    const { data: session } = useSession()
    if(!session) {
        return <main>
            <h1>Access Denied</h1>
        </main>
    }

    getUser(id, setUser);

    return (
        <main><h1>Users Detail Page</h1>
            <table className="table">
                <tbody>
                <tr><td>Name</td><td>{user.name}</td></tr>
                <tr><td>Email</td><td>{user.email}</td></tr>
            </tbody></table>
            <button className='btn btn-primary'onClick={async () =>{
                await fetch(
                     "/api/users/" + id,
                    {
                        method: 'DELETE',
                    });
                await router.push("/users");
            }}>Delete</button>

        </main>
    );
};

async function getUser(id: string, setUser: Function) {

    console.log("id", id);
    const res = await fetch(
        "/api/users/" + id,
        {
            cache: "no-cache",
            // next: {
            //     revalidate: 10,
            // }
        });

    const user = await res.json();
    setUser(user);
}

export default UserDetailPage;