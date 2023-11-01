import {NextRequest, NextResponse} from "next/server";
import schema from "@/app/api/users/schema";
import prisma from "@/prisma/client";
import bcrypt from "bcrypt";

interface Props {
    params: {
        id: string
    }
}


export async function GET(request: NextRequest, {params: {id}}: Props) {

    const user = await prisma.user.findUnique(
        {
            where: {
                id: id
            }
        }
    );

    if (!user) {
        return NextResponse.json({
                error: "User Not Found"
            },
            {
                status: 404
            });
    }
    return NextResponse.json(user);
}

export async function PUT(request: NextRequest, {params: {id}}: Props) {
    const body = await request.json();

    console.log("PUT user update", body);
    const validation = schema.safeParse(body);

    // Validate the body
    // If invalid, return a 400 with an error object
    // If valid, query for the user in the db
    // if not found, return a 404
    // if found - update the user and return the updated user

    if (!validation.success) {
        return NextResponse.json({
                error: validation.error.errors,
            },
            {
                status: 400
            });
    }

    const user = await prisma.user.findUnique({
        where: {
            id: id
        }
    })

    if (!user) {
        return NextResponse.json({
                error: "User Not Found"
            },
            {
                status: 404
            });
    }

    if (body.password != "" && body.password != null) {
        user.hashedPassword = await bcrypt.hash(body.password, 10);
    }

    const updatedUser = await prisma.user.update({
        where: {
            id: id
        },
        data: {
            name: body.name,
            email: body.email,
            hashedPassword: user.hashedPassword
        }
    })

    if (!updatedUser) {
        return NextResponse.json({
                error: "User Not Updated"
            },
            {
                status: 404
            });
    }

    return NextResponse.json(
        {
            user: updatedUser,
        },
        {
            status: 201
        }
    );
}

export async function DELETE(request: NextRequest, {params: {id}}: Props) {
    //const body = await request.json();

    var user = await prisma.user.findUnique({
        where: {
            id: id
        }
    })

    if (!user) {
        return NextResponse.json({
                error: "User Not Found"
            },
            {
                status: 404
            });
    }

    user = await prisma.user.delete({
        where: {
            id: id
        }
    })

    return NextResponse.json({},
        {
            status: 200
        }
    );
}

