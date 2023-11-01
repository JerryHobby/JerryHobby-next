import React, {ReactNode} from 'react';
import {getServerSession} from "next-auth";
import {nextAuthOptions} from "@/app/api/auth/[...nextauth]/route";

interface Props {
    children: ReactNode
}

const AdminLayout = async ({children}: Props) => {
    const session = await getServerSession(nextAuthOptions)
    if (!session) {
        return <main>
            <h1>You must be logged in.</h1>
        </main>
    }

    return (
        <main className="p-0 m-0">
            <div className='flex'>
                <aside className='bg-slate-200 p-5 mr-5 min-w-fit min-h-full'>
                    <div className="min-h-8">Admin Sidebar</div>
                    <div className="min-h-8">Admin</div>

                    <div className="min-h-8"> Sidebar</div>
                    <div className="min-h-8">Admin Sidebar</div>
                </aside>
                <main className='min-w-full'>{children}</main>
            </div>
        </main>
    );
};


export default AdminLayout;