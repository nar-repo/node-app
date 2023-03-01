import mongoose, { Schema } from "mongoose";


mongoose.connect(
    "mongodb+srv://nahm1529:0415@cluster0.uaud6cv.mongodb.net/?retryWrites=true&w=majority"
);


const db = mongoose.connection;

db.once("open", () => {
    console.log("Successfully connect to Atlas");
});


const userSchema = new Schema({
    firstName: String,
    lastName: String
});
const User = mongoose.model("User", userSchema);


const citySchema = new Schema({
    userId: {type: mongoose.Schema.Types.ObjectId,
    ref: 'User'},
    name: String,
    longitude: Number,
    latitude: Number

});
const City = mongoose.model("City", citySchema);


const foodieSchema = new Schema({
    userId: {type: mongoose.Schema.Types.ObjectId,
    ref: 'User'},
    cityId: {type: mongoose.Schema.Types.ObjectId,
    ref: 'City'},
    name: String,
    address: String,
    menu: String
});
const Foodie = mongoose.model("Foodie", foodieSchema);


const createUser = async (firstName, lastName) => {
    const user = new User({firstName: firstName, lastName:lastName});
    return user.save();
}


