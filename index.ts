import express,{Response,Request} from 'express'
const  app=express();
app.use('/',(res:Response,req:Request):any=>{
    return res.json('Hello !')
})
app.listen(8000,()=>{console.log('listening ..')})