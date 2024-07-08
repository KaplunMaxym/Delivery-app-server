import { IsArray, IsNumber, IsString } from 'class-validator'

export class OrderItemDto {
	@IsNumber()
	price: number

	@IsString()
	productId: string

	@IsNumber()
	quantity: number
}

export class OrderDto {
	@IsArray()
	items: OrderItemDto[]
}
