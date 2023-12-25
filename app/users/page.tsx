import React from 'react';
import UserTable from "@/app/users/UserTable";
import Link from "next/link";
import {getServerSession} from "next-auth";
import nextAuthOptions from '@/auth';

interface Props {
    searchParams: {
        sortOrder: string,
    }
}

const UsersPage = async ({searchParams: {sortOrder}}: Props) => {
    const session = await getServerSession(nextAuthOptions)
    if (!session) {
        return <main>
            <h1>You must be logged in.</h1>
        </main>
    }


    return (
        <main>
            <h1>Users</h1>
            <Link className='btn' href='/users/new'>New User</Link>
            <hr></hr>
            <UserTable sortOrder={sortOrder}/>
        </main>
    );
};

export default UsersPage;