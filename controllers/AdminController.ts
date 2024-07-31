import   {Request , Response , NextFunction} from 'express';
import { CreateVendorInput } from '../dto';


export const CreateVendor = async (req:Request,res:Response,next:NextFunction)=>{
    const{name,address,pincode,ownerName,foodType,phone,email,password}=<CreateVendorInput>req.body

    res.json({name,address,pincode,ownerName,foodType,phone,email,password})
}

export const GetVendors = async (req:Request,res:Response,next:NextFunction)=>{
    
}


export const GetVendorByID = async (req:Request,res:Response,next:NextFunction)=>{
    
}

