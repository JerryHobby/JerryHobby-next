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
    const session = await getServerSession(authOptions);

    if (!session || !(session.user?.email === "jerry@anythinginternet.com")) {
        return NextResponse.json(
            {
                error: "Access Denied"
            }, {status: 401});
    }

    const body = await req.json();

    const validation = newArticleSchema.safeParse(body);
    if (!validation.success) {
        return NextResponse.json(
            validation.error.format(),
            {status: 400});
    }

    const newArticle = await prisma.article.create({
        data: {
            userId: body.userId,
            title: body.title,
            summary: body.summary,
            text: body.description,
            categoryId: body.categoryId,
        }
    });

    return NextResponse.json(newArticle, {status: 201});
}