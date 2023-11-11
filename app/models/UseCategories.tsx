import prisma from "@/prisma/client";

const UseCategories = () => {

    return prisma.category.findMany(
        {
            include: {
                articles: true
            },
            orderBy: {
                name: 'asc'
            }
        }
    );
};

export default UseCategories;