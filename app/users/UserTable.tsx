import {User} from "@/app/users/IUser";
import Link from "next/link";
import React from "react";
import {getServerSession} from "next-auth";
import nextAuthOptions from "@/auth";

interface Props {
    sortOrder: string,
}

async function UserTable({sortOrder}: Props = {sortOrder: 'name'}) {

    const session = await getServerSession(nextAuthOptions)
    if (!session) {
        return <main>
            <h1>You must be logged in.</h1>
        </main>
    }


    const users = await getUsers(sortOrder);

    return (
        <table className='table table-bordered '>
            <thead>
            <tr>
                <th><Link href="?sortOrder=name">Name</Link></th>
                <th><Link href="?sortOrder=email">Email</Link></th>
            </tr>
            </thead>
            <tbody>
            {users.map((user: User) => (
                <tr key={user.id}>
                    <td><Link href={process.env.HOSTNAME + "/users/" + user.id + "/"}>{user.name}</Link></td>
                    <td>{user.email}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );

    async function getUsers(sortOrder: string) {
        const res = await fetch(
            process.env.HOSTNAME + "/api/users",
            {
                cache: "no-cache",
                // next: {
                //     revalidate: 1,
                // }
            });

        var users: User[] = await res.json();
        if (sortOrder === 'name')
            users = users.sort((a: User, b: User) => {
                return a.name < b.name ? -1 : 1;
            });
        else if (sortOrder === 'email')
            users = users.sort((a: User, b: User) => {
                return a.email < b.email ? -1 : 1;
            });
        return users;
    }
}

export default UserTable;
export const dynamic="force-dynamic";
