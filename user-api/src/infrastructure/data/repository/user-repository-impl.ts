import { plainToInstance } from "class-transformer";
import { UserEntity } from "../../../domain/entity";
import { UserRepository } from "../../../domain/repository";
import { UserModelMapper } from "../mapper";
import { UserModel } from "../model";

export class UserRepositoryImpl implements UserRepository {
  constructor(private readonly userModelMapper: UserModelMapper) {}

  async create(entity: UserEntity): Promise<UserEntity> {
    const userModel = this.userModelMapper.fromCreateRequest(entity);

    return this.userModelMapper.toCreateResponse(userModel);
  }

  async findOne(id: string): Promise<UserEntity> {
    const userModel = plainToInstance(UserModel, {
      id: "12121",
      fullName: "dat truong",
      email: "dattruong00@gmail.com",
      createdAt: new Date(),
    });

    return this.userModelMapper.toCreateResponse(userModel);
  }

  async find(): Promise<UserEntity[]> {
    const userModel = plainToInstance(UserModel, {
      id: "12121",
      fullName: "dat truong",
      email: "dattruong00@gmail.com",
      createdAt: new Date(),
    });

    return this.userModelMapper.toFindResponse([userModel]);
  }

  async update(entity: UserEntity): Promise<void> {
  }

  async delete(id: string): Promise<void> {
  }
}
