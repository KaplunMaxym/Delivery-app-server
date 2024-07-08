import { Prisma } from '@prisma/client'
import { IsNumber, IsOptional, IsString } from 'class-validator'

export class ProductDto implements Prisma.ProductUpdateInput {
	@IsString()
	name: string

	@IsNumber()
	price: number

	@IsOptional()
	@IsString()
	description: string

	@IsString()
	image: string

	@IsString()
	categoryId: string
}
