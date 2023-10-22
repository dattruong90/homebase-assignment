import { Request } from "express";
import { CreateUserDto, UserDto } from "../dto";
import { plainToInstance, instanceToPlain, plainToClass } from "class-transformer";
import { UserEntity } from "../../domain/entity";

export class UserEntityMapper {
  fromCreateRequest(source: Request): UserEntity {
    const createUserDto = plainToInstance(CreateUserDto, source.body, {
      excludeExtraneousValues: true,
    })

    return plainToInstance(UserEntity, createUserDto, {
      excludeExtraneousValues: true,
    })
  }

  toCreateResponse(source: UserEntity): UserDto {
    return plainToInstance(UserDto, source, {
      excludeExtraneousValues: true,
    })
  }

  toFindResponse(source: UserEntity[]): UserDto[] {
    return plainToInstance(UserDto, source, {
      excludeExtraneousValues: true,
    })
  }
}
