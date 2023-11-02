// query categories
// query articles
// build navigation menu for categories
// build navigation menu for articles
// return object with categories and articles

import prisma from "@/prisma/client";

interface Props {
    currentCategory: number
}

const UseArticles = async ({currentCategory}: Props) => {
    const articles = await prisma.article.findMany(
        {
            where: {
                categoryId: currentCategory
            }
        }
    );

    return articles
};

export default UseArticles;