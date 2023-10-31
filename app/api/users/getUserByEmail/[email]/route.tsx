import {NextRequest, NextResponse} from "next/server";
import prisma from "@/prisma/client";
import {z} from "zod";

const schema = z.object({
    email: z.string().email(),
})

interface Props {
    params: {
        email: string
    }
}
export async function GET(request: NextRequest, {params: {email}}: Props) {
    const body = request.body;
    console.log("GET:", email);

    const validation = schema.safeParse({email: email});

    if (!validation.success) {
        console.log("GET Validation Error" + validation.error.errors);
        return NextResponse.json({
                error: validation.error.errors,
            },
            {
                status: 400
            });
    }

    var user = await prisma.user.findUnique({
        where: {
            email: email
        }
    });

    if (!user) {
        console.log("GET User Not Found");

        return NextResponse.json({
                error: "User not found",
            },
            {
                status: 404
            });
    }

    console.log("GET User Found");
    return NextResponse.json({
            user: user
        },
        {
            status: 200
        }
    );
}

