import { Prisma } from '@prisma/client'
import { returnCategoryObject } from 'src/category/return-category.object'

export const returnProductObject: Prisma.ProductSelect = {
	image: true,
	description: true,
	id: true,
	name: true,
	price: true,
	createdAt: true,
	slug: true,
	category: { select: returnCategoryObject }
}

export const returnProductObjectFullest: Prisma.ProductSelect = {
	...returnProductObject
}
