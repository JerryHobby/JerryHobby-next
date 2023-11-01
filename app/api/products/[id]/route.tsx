import {NextRequest, NextResponse} from "next/server";
import schema from "@/app/api/products/schema";
import prisma from "@/prisma/client";

interface Props {
    params: {
        id: string
    }
}

export async function GET(request: NextRequest, {params: {id}}: Props) {

    if (!id) {
        const products = await prisma.products.findMany();
        if (!products) {
            return NextResponse.json({
                    error: "No Products Found"
                },
                {status: 404});
        }
        return NextResponse.json(products);
    }

    const product = await prisma.products.findUnique({
        where: {
            id: parseInt(id)
        }
    });
    if (!product) {
        return NextResponse.json({
                error: "Product Not Found"
            },
            {status: 404});
    }
    return NextResponse.json(product);
}

export async function PUT(request: NextRequest, {params: {id}}: Props) {
    const body = await request.json();

    const validation = schema.safeParse(body);

    // Validate the body
    // If invalid, return a 400 with an error object
    // If valid, query for the item in the db
    // if not found, return a 404
    // if found - update the item and return the updated item

    if (!validation.success) {
        return NextResponse.json({
                error: validation.error.errors,
            },
            {
                status: 400
            });
    }
    // update db

    const product = await prisma.products.findUnique({
        where: {
            id: parseInt(id)
        }
    })

    if (!product) {
        return NextResponse.json({
                error: "Product Not Found"
            },
            {
                status: 404
            });
    }

    const updatedProduct = await prisma.products.update({
        where: {
            id: parseInt(id)
        },
        data: {
            name: body.name,
            price: body.price,
        }
    })

    if (!updatedProduct) {
        return NextResponse.json({
                error: "Product Not Updated"
            },
            {
                status: 404
            });
    }

    return NextResponse.json(updatedProduct,
        {
            status: 201
        }
    );

}

export async function DELETE(request: NextRequest, {params: {id}}: Props) {
    //const body = await request.json();
    var product = await prisma.products.findUnique({
        where: {
            id: parseInt(id)
        }
    })

    if (!product) {
        return NextResponse.json({
                error: "Product Not Found"
            },
            {
                status: 404
            });
    }

    product = await prisma.products.delete({
        where: {
            id: parseInt(id)
        }
    })

    return NextResponse.json({},
        {
            status: 200
        }
    );
}


