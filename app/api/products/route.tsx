import {NextRequest, NextResponse} from "next/server";
import schema from "@/app/api/products/schema";
import prisma from "@/prisma/client";

interface Props {
    params: {
        id: string
        name: string
        price: number
    }
}

export async function GET(request: NextRequest) {

    const products = await prisma.products.findMany();
    if (!products) {
        return NextResponse.json({
                error: "No Products Found"
            },
            {status: 404});
    }
    return NextResponse.json(products);
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

    var product = await prisma.products.findUnique({
        where: {
            name: body.name
        }
    })

    if (product) {
        return NextResponse.json({
                error: "Product Not Added - Already Exists"
            },
            {
                status: 400
            });
    }

    if (!product) {
        product = await prisma.products.create({
            data: {
                name: body.name,
                price: parseFloat(body.price),
                description: body.description,
            }
        })
    }

    if (!product) {
        return NextResponse.json({
                error: "Product Not Added"
            },
            {
                status: 404
            });
    }

    return NextResponse.json(product,
        {
            status: 201
        }
    );
}

