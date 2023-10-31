import {NextRequest, NextResponse} from "next/server";
import {z} from "zod";
import prisma from "@/prisma/client";
import bcrypt from "bcrypt";

const schema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(8),
})

export async function POST(request: NextRequest) {
    const body = await request.json();

    const validation = schema.safeParse(body);

    if (!validation.success) {
        return NextResponse.json({
            status: 400,
            json: {
                error: validation.error.errors,
            },
        });
    }

    const user = await prisma.user.findUnique({
        where: {
            email: body.email
        }
    });

    if (user) {
        return NextResponse.json({
            status: 400,
            json: {
                error: "User Not Added - Email already in use"
            },
        });
    }

    const hashedPassword = await bcrypt.hash(body.password, 10);

    const newUser = await prisma.user.create({
        data: {
            name: body.name,
            email: body.email,
            hashedPassword: hashedPassword,
        }
    });

    return NextResponse.json({
        status: 200,
        email: newUser.email,
    })
}