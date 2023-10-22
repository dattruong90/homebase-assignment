import { UserRepository } from "../../domain/repository";
import { UserRepositoryImpl } from "../../infrastructure/data/repository";
import { userModelMapper } from "./mapper-model-container";

export const userRepository: UserRepository = new UserRepositoryImpl(userModelMapper);
