import mongoose from 'mongoose';

const userCollection = 'usuers';
const { Schema, model } = mongoose;

const UserSchema = new Schema({
    name: { type: String, required: true, max: 100 },
    lastName: { type: String, required: true, max: 100 },
    email: { type: String, required: true, max: 100 },
    userName: { type: String, required: true, max: 100 },
    pasword: { type: Number, required: true }  
})

const UserModel = model(userCollection, UserSchema);

export default UserModel;