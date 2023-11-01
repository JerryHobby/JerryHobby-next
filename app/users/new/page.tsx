'use client';
import React, {useState} from 'react';
import {useRouter} from "next/navigation";

interface User {
    name: string,
    email: string,
    password: string,
    confirmPassword: string,
}

const NewUserPage = () => {

    const [newUser, setNewUser] = useState<User>({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    var user: User = {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    };

    const router = useRouter();
    return (
        <main>
            <h1>New User</h1>
            <label>Name:</label><input type="text" placeholder="Name" className="form-control border"
                                       onChange={(v) => {
                                           user = {...newUser};
                                           user.name = v.target.value;
                                           setNewUser(user);
                                       }}/>
            <label>Email:</label><input type="text" placeholder="Email" className="form-control border"
                                        onChange={(v) => {
                                            user = {...newUser};
                                            user.email = v.target.value;
                                            setNewUser(user);
                                        }}/>
            <label>New Password:</label><input type="text" placeholder="Password"
                                               className="form-control password border"
                                               onChange={(v) => {
                                                   user = {...newUser};
                                                   user.password = v.target.value;
                                                   setNewUser(user);
                                               }}/>
            <label>New Password:</label><input type="text" placeholder="Password "
                                               className="form-control password border"
                                               onChange={(v) => {
                                                   user = {...newUser};
                                                   user.confirmPassword = v.target.value;
                                                   setNewUser(user);
                                               }}/>

            <button className='btn btn-primary' onClick={async () => {
                if (newUser.password != newUser.confirmPassword) {
                    alert("Passwords do not match " + newUser.password + " != " + newUser.confirmPassword);
                    return;
                }
                const res = await fetch(
                    "/api/register/",
                    {
                        method: 'POST',
                        body: JSON.stringify({
                            "name": newUser.name,
                            "email": newUser.email,
                            "password": newUser.password,
                        }),
                    }
                );
                const user = await res.json();
                console.log(user);
                router.push("/users");
            }}>Create
            </button>
        </main>
    );
};

export default NewUserPage;