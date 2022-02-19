import { prisma} from "../../../database/prismaClient";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

interface IAuthenticateDeliveryman {

    username: string;
    password: string;
}
export class AutheticateDeliverymanUseCase {
    async execute({username, password}:IAuthenticateDeliveryman) {

        const deliveryman = await prisma.deliveryman.findFirst({
            where: {
                username
            }
        })

        if(!deliveryman) {
            throw new Error("Username or password invalid.")
        }
        
        const passwordMatch = await compare(password, deliveryman.password);

        if(!passwordMatch) {
            throw new Error("Username or password invalid.")
        }

        const token = sign({username}, "c0988d02440325fddab5405e5c628d9f",{
            subject:deliveryman.id,
            expiresIn:"1d"
        })

        return token;


    }

}