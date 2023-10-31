import {NextRequest, NextResponse} from "next/server";
import schema from "@/app/api/users/schema";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
    const users = await prisma.user.findMany();
    return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
    const body = await request.json();

    const validation = schema.safeParse(body);

    if (!validation.success) {
        return NextResponse.json({
                error: validation.error.errors,
            },
            {
                status: 400
            });
    }

    var user = await prisma.user.findUnique({
        where: {
            email: body.email
        }
    })

    if (user) {
        return NextResponse.json({
                error: "User Not Added - Email already in use"
            },
            {
                status: 400
            });
    }

    if (!user) {
        user = await prisma.user.create({
            data: {
                name: body.name,
                email: body.email,
            }
        })
    }

    if (!user) {
        return NextResponse.json({
                error: "User Not Added"
            },
            {
                status: 404
            });
    }

    return NextResponse.json(user,
        {
            status: 201
        }
    );
}

