import { PrismaClient } from '@prisma/client';
// connect to db

export default defineEventHandler(async (event) => {
  const prisma = new PrismaClient();
  const search = decodeURIComponent(event.context.params.search);

  console.log("search", search);


  let recipe;
  // @ts-ignore
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };

    recipe = await prisma.recipes.findUnique({
        where: {
            id: Number(search)
        }
    });

    console.log("recipe found", recipe);

  return {
    success: true,
    data: recipe,
  };
});
