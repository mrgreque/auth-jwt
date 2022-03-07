import { Request, Response } from "express"
import { GetUserUseCase } from "./GetUserUseCase";


class GetUserController {

    async handle(request: Request, response: Response) {

        const { username } = request.params;

        if(!username) {
            
            const getUserUseCase = new GetUserUseCase();
            const users = await getUserUseCase.findAll();

            return response.json(users);
        } 

        const getUserUseCase = new GetUserUseCase();
        const user = await getUserUseCase.findExecute({username});

        return response.json(user);
    };

};

export { GetUserController }