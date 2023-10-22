import { UserEntity } from "../entity";
import { UserRepository } from "../repository";
import { UserService } from "./user-service";

export class UserServiceImpl implements UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(entity: UserEntity): Promise<UserEntity> {
    entity.validateAndThrow()

    return this.userRepository.create(entity)
  }

  async findOne(id: string): Promise<UserEntity> {
    return this.userRepository.findOne(id)
  }

  async find(): Promise<UserEntity[]> {
    return this.userRepository.find()
  }

  async update(entity: UserEntity): Promise<void> {
    entity.validateAndThrow()
    
    return this.userRepository.update(entity)
  }

  async delete(id: string): Promise<void> {
    return this.userRepository.delete(id)
  }
}
