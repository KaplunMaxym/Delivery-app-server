import { IsString } from 'class-validator'

export class CategoryDto {
	@IsString()
	name: string

	@IsString()
	image: string
}
