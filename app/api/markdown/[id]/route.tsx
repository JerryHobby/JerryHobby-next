import {NextRequest, NextResponse} from "next/server";
import prisma from "@/prisma/client";

export async function GET(request: NextRequest, {params}: {
    params: {
        id: string
    }
}) {
    if (!params.id) {
        return NextResponse.json(
            {
                error: "Missing Required Fields",
            },
            {
                status: 400,
            }
        );
    }

    const content = await prisma.page.findMany({
        where: {
            title: {
                startsWith: params.id
            }
        },
        orderBy: {
            title: 'asc'
        }
    });

    return NextResponse.json(content,
        {
            status: 200,
        }
    );
}