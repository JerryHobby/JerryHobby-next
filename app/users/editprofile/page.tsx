"use client"
import React, {useState} from 'react';
//import {router} from "next/client";
import {useRouter} from "next/navigation";

import {useSession} from "next-auth/react";

interface User {
    id: string,
    name: string,
    email: string,
    password: string,
    hashedPassword: string,
    confirmPassword: string,
}

const EditProfile = () => {

    const router = useRouter();
    const [newUser, setNewUser] = useState({} as User);

    const {data: session, status, update} = useSession();
    if (!session) {
        return <main>
            <h1>Access Denied</h1>
        </main>
    }

    // fetch current user details from db
    if (!session.user?.email) {
        return <main>
            <h1>Access Denied</h1>
        </main>
    }

    console.log("id", session.user!.email);

    if (newUser.id == null)
        getUser(session.user!.email, setNewUser);

    // fetch current user details from db
    if (newUser!.hashedPassword == null) {
        return <main>
            <h1>Cannot edit external profiles</h1>
        </main>
    }


    let tmpUser: User;

    return (
        <main><h1>Edit Profile Page</h1>
            <label>Name:</label><input type="text" value={newUser.name} placeholder="Name"
                                       className="form-control border"
                                       onChange={(v) => {
                                           tmpUser = {...newUser};
                                           tmpUser.name = v.target.value;
                                           setNewUser(tmpUser);
                                       }}/>
            <label>Name:</label><input type="text" value={newUser.email} placeholder="EMail"
                                       className="form-control border"
                                       onChange={(v) => {
                                           tmpUser = {...newUser};
                                           tmpUser.email = v.target.value;
                                           setNewUser(tmpUser);
                                       }}/>

            <label>New Password:</label><input type="text" placeholder="Password "
                                               className="form-control password border"
                                               onChange={(v) => {
                                                   tmpUser = {...newUser};
                                                   tmpUser.password = v.target.value;
                                                   setNewUser(tmpUser);
                                               }}/>

            <label>Confirm Password:</label><input type="text" placeholder="Confirm Password "
                                                   className="form-control password border"
                                                   onChange={(v) => {
                                                       tmpUser = {...newUser};
                                                       tmpUser.confirmPassword = v.target.value;
                                                       setNewUser(tmpUser);
                                                   }}/>

            <button className='btn btn-primary' onClick={async () => {
                await update(
                    {
                        name: newUser.name,
                        email: newUser.email,
                        trigger: "update"
                    },
                );
                await update();
                saveChanges(newUser, router);
            }
            }>Save Changes
            </button>

        </main>
    );
};

async function saveChanges(newUser: User, router: any) {
    {
        if (newUser.password != newUser.confirmPassword) {
            alert("Passwords do not match " + newUser.password + " != " + newUser.confirmPassword);
            return;
        }
        const res = await fetch(
            "/api/users/" + newUser.id,
            {
                method: 'PUT',
                body: JSON.stringify({
                    "id": newUser.id,
                    "name": newUser.name,
                    "email": newUser.email,
                    "password": newUser.password,
                }),
            }
        );
        console.log("results:", res);
        // const resp = await res.json();
        // const user = resp.body.user;
        // console.log(user);
        router.push("/users");

    }
}

async function getUser(email: string, callback: Function) {
    //http://localhost:3000/api/users/getUserByEmail/jerryhobby@gmail.com

    console.log("Requesting user: ", email);
    const res = await fetch(
        "/api/users/getUserByEmail/" + email,
        {
            cache: "no-cache",
            // next: {
            //     revalidate: 10,
            // }
        });
    const resp = await res.json();
    const user = resp.user;
    console.log("setUser Callback: ", user);
    callback(user);
    return
}

export default EditProfile;