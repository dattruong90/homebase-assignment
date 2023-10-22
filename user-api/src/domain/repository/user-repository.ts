import { UserEntity } from "../entity";

export interface UserRepository {
  create(entity: UserEntity): Promise<UserEntity>

  findOne(id: string): Promise<UserEntity>

  find(): Promise<UserEntity[]>

  update(entity: UserEntity): Promise<void>

  delete(id: string): Promise<void>
}
