import React from 'react';
import Title from "../../components/Title";
import useCategories from "@/app/models/UseCategories";
import ArticleForm from "@/app/articles/new/articleForm";
import {getServerSession} from "next-auth";

const title = "Articles"
const icon = "articles"

const Page = async () => {
    const session = await getServerSession();

    const categories = await useCategories();

    if (!session) {
        return (
            <div>
                <h1>Not Logged In</h1>
            </div>
        )
    }

    const admin = session.user?.email === "jerry@anythinginternet.com";

    if (!admin) {
        return (
            <div>
                <h1>Not Authorized</h1>
            </div>
        )
    }

    return (
        <>
            <Title title={title} icon={icon}/>
            <center>
                <ArticleForm categories={categories}/>
            </center>
        </>
    );
};

export default Page;