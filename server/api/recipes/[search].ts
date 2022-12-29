import { PrismaClient } from '@prisma/client';
// connect to db

export default defineEventHandler(async (event) => {
  const prisma = new PrismaClient();
  const search = decodeURIComponent(event.context.params.search);

  let recipe;
  // @ts-ignore
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };

  const seeAll = [
    'all uc davis recipes',
    'all',
    'all recipes'
  ]

  if (seeAll.includes(search)) {
    recipe = await prisma.recipes.findMany();
  } else {
    recipe = await prisma.recipes.findMany({
      where: {
        OR: [
          {
            name: {
              contains: search,
            },
          },
          {
            description: {
              contains: search,
            },
          },
          {
            keywords: {
                contains: search,
            }
          }
        ],
      },
    });
  }

  return {
    success: true,
    data: recipe,
  };
  // console.log("prisma", prisma.recipes.findFirst());

  // prisma.recipes.create({
  //     data: {cook_time: 1, description: 'yes please', id: 2, ingredients: [["food", "2"]], instructions: ["do stuff"], name: "i unno", prep_time: 2, servings: 2, total_time: 2}
  // }).then((data) => {
  //     return {
  //         ok: 'true',
  //         data
  //     }
  // })
  // query db
  // prisma.recipes.findFirst({
  //     where: {
  //         name: 'French'
  //     }

  // }).then(() => {
  //     return {
  //         ok: 'true',
  //         event
  //     }
  // })
  // return data
  // return {
  //     api: 'prisma'
  // }
});
