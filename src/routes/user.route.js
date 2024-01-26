// import express from 'express';
// import {User} from '../models/user.model'
// import * as userController from '../controllers/user.controller';
// import { newUserValidator } from '../validators/user.validator';
// import { userAuth } from '../middlewares/auth.middleware';
// import { validate } from '@hapi/joi/lib/base';

// const router = express.Router();

// // //route to get all users
// // // router.get('', userController.getAllUsers);
// // router.get('', userController.getAllUsers);

// // //route to create a new user
// // router.post('', userController.newUser);

// // //route to get a single user by their user id
// // router.get('/:_id', userAuth, userController.getUser);

// // //route to update a single user by their user id
// // router.put('/:_id', userController.updateUser);

// // //route to delete a single user by their user id
// // router.delete('/:_id', userController.deleteUser);

// router.post("/",async(req,res)=>{
//     try {
//         const {error} = validate(req.body);
//         if(error) 
//             return res.status(400).send({
//         message:error.details[0].message});

//         const user = await User.findOne({
//             email: req.body.email
//         });

//         if(user)
//             return res
//                 .send(409)
//                 .send({message:"user ith given email already exist!"});
        
//         const salt = await bcrypt.genSalt(Number(process.env.SALT));
//         const hashPassword = await bcryot.hash(req.body.password);
        

//         await new User({ ...req.body,password,hashPassword}).save();
//         res.status(201).send({message:"User created successfully"});


//     } catch (error) {
//         res.status(500).send({
//             message: "Internal server error"
//         });
        
//     }
// })

// export default router;
