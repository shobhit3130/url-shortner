const errorHandler=(err,req,res,next)=>{
    if(err instanceof AppError){
        res.status(err.statusCode).json({
            status:err.status,
            message:err.message
        })
    }

    console.log(err);
    res.status(500).json({
        status:"error",
        message:err.message||"Internal Server Error"
    })
}
class AppError extends Error{
    statusCode;
    isOperational;
constructor(message,statusCode){
    super(message);
    this.statusCode=500;
    this.isOperational=true;
    Error.captureStackTrace(this,this.constructor);
}
}
class NotFoundError extends AppError{
    constructor(message){
        super(message,404);
    }
}

class conflictError extends AppError{
    constructor(message="conflict error"){
        super(message,409);
    }
}

class BadRequestError extends AppError{
    constructor(message="Bad Request"){
        super(message,400);
    }
}

class UnauthorizedError extends AppError{
    constructor(message="Unauthorized"){
        super(message,401);
    }
}
module.exports = {
    errorHandler,
    AppError,
    NotFoundError,
    conflictError,
    BadRequestError,
    UnauthorizedError
};