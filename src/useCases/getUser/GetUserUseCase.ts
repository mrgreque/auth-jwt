import { client } from "../../model/client";


interface IFind {
    username: string;
}

class GetUserUseCase {

    async findExecute({username}: IFind) {

        console.log(username);
        

        const users = await client.user.findFirst({
            where: {
                username
            }
        });

        if(!users) {
            console.log(users);
            throw new Error("User not found")
        };

        return { users };

    }

    async findAll() {
        const users = await client.user.findMany({});

        return { users };
    };

};

export { GetUserUseCase }