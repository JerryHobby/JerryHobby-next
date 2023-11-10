import {NextRequest, NextResponse} from "next/server";
import prisma from "@/prisma/client";
import {getServerSession} from "next-auth";
import authOptions from "@/app/auth/authOptions";
import {newArticleSchema} from "@/app/models/validationSchemas";

export async function GET(request: NextRequest) {
    const articles = await prisma.article.findMany(
        {
            orderBy: {
                date: 'desc'
            }
        }
    );
    return NextResponse.json(articles);
}

export async function POST(req: NextRequest) {
    // const session = await getServerSession(authOptions);
    //
    // console.log("session: ", session);
    //

    // if (!session || !(session.user?.email === "jerry@anythinginternet.com")) {
    //     return NextResponse.json(
    //         {
    //             error: "Access Denied"
    //         }, {status: 401});
    // }

    const body = await req.json();

    const validation = newArticleSchema.safeParse(body);
    if (!validation.success) {
        return NextResponse.json(
            validation.error.format(),
            {status: 400});
    }

    console.log(body);
    console.log(body.categoryId);

    const newArticle = await prisma.article.create({
        data: {
            userId: body.userId,
            title: body.title,
            summary: body.summary,
            text: body.text,
            categoryId: parseInt(body.categoryId),
        }
    });

    return NextResponse.json(newArticle, {status: 201});
}