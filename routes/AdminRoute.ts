import express,{Request,Response,NextFunction} from 'express'
import { CreateVendor, Getendors, GetVendorById } from '../controllers';
const router =express.Router();
router.post('/vendor',CreateVendor)
router.get('vendors',Getendors)
router.get('/vendor/:id',GetVendorById)
router.get('/',(req:Request,res:Response,next:NextFunction):any=>{
res.json({message:"Hello from Admin"})
})
export{router as AdminRoute};