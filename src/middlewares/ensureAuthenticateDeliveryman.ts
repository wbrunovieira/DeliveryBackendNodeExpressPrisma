import { Response,Request, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

interface IPayload {
    sub: string;
}

export async function ensureAuthenticateDeliveryman(request:Request, response:Response, next:NextFunction) {

    const authHeader = request.headers.authorization;

    if(!authHeader) {
        return response.status(401).json({
            message:"Token missing"
        })
    }

    const [  ,token] = authHeader.split(" ");

    try {
        
        const { sub }= verify(token, "c0988d02440325fddab5405e5c628d9f") as IPayload;
        
        request.id_deliveryman = sub;

        return next();

    } catch (err) {
        return response.status(401).json({
            message:"invalid token"
        })
        
    }
    return 
    
}