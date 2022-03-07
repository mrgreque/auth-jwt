import dayjs from "dayjs";

import { client } from "../model/client";

class GenerateRefreshToken {

    async execute(userId: string) {
        const expiresIn = dayjs().add(20, "seconds").unix();

        const generateRefreshToken = await client.refreshToken.create({
            data: {
                userId,
                expiresIn
            }
        });

        return generateRefreshToken;
    };
};

export { GenerateRefreshToken };