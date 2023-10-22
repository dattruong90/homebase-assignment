import { Request, Response } from "express";
import { UserEntityMapper } from "../mapper";
import { UserDto } from "../dto";
import { UserService } from "../../domain/service";

export class UserController {
  constructor(
    private readonly userEntityMapper: UserEntityMapper,
    private readonly userService: UserService
  ) {}

  async create(req: Request, res: Response): Promise<UserDto> {
    const userEntity = this.userEntityMapper.fromCreateRequest(req)
    const result = await this.userService.create(userEntity)

    return this.userEntityMapper.toCreateResponse(result);
  }

  async findOne(req: Request, res: Response): Promise<UserDto> {
    const findOneResponse = await this.userService.findOne(req.params.id)

    return this.userEntityMapper.toCreateResponse(findOneResponse);
  }

  async find(req: Request, res: Response): Promise<UserDto[]> {
    const result = await this.userService.find();

    return this.userEntityMapper.toFindResponse(result);
  }

  async update(req: Request, res: Response): Promise<void> {
    const createRequest = this.userEntityMapper.fromCreateRequest(req)
    await this.userService.update(createRequest)
  }

  async delete(req: Request, res: Response): Promise<void> {
    await this.userService.delete(req.params.id)
  }
}
