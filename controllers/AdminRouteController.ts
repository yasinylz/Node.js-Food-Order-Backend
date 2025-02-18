import { Request, Response, NextFunction } from "express"
import {CreateVendorInputs}from "../dto"
import { Vendor } from "../models";
import { GeneratePassword, GenerateSalt } from "../utility";

export const CreateVendor = async (req: Request, res: Response, next: NextFunction):Promise<any> => {
    const { name,
        ownerName,
        foodType,
        pincode,
        address,
        phone,
        email,
        password } = <CreateVendorInputs>req.body;

    const existingVendor=await Vendor.findOne({email:email})
    if(existingVendor!==null){return res.json({msg:"A vendor is exist with this email ID"})}
//gen salt
const salt= await GenerateSalt();
//password hash
const userPassword= await GeneratePassword(password,salt)

   const  createVendor=await Vendor.create({
    name:name,
        ownerName:ownerName,
        foodType:foodType,
        pincode:pincode,
        address:address,
        phone:phone,
        email:email,
        password:userPassword,
        salt:salt,
        rating:0,
        servicesAvailabe:false,
        coverImages:[]
   })
   res.json(createVendor)

}
export const Getendors = async (req: Request, res: Response, next: NextFunction) => {

}
export const GetVendorById = async (req: Request, res: Response, next: NextFunction) => {

}