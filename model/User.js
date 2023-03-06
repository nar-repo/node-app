import mongoose from 'mongoose';
const { Schema, model } = mongoose;



const userSchema = new Schema({
    firstName: String,
    lastName: String
});


const user = model('User', userSchema);
export default user;