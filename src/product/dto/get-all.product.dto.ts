import { IsOptional, IsString } from 'class-validator'

export class GetAllProductDto {
	@IsOptional()
	@IsString()
	searchTerm?: string
}
