import { NextFunction, Request, Response } from "express";
import { DatabaseConnectionError } from "../errors/database-connection-error";
import { RequestValidationError } from "../errors/request-Validation-Error";

export const errorHandler = (err:Error, req:Request, res:Response, next:NextFunction) => {
    console.log('something wrong', err)

    if (err instanceof RequestValidationError) {
        console.log('handling this as request validation error')
    }

    if (err instanceof DatabaseConnectionError) {
        console.log('handling database error')
    }
    res.status(400).send({
        message: err.message
    })
}