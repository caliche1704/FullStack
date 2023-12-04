import mongoose from "mongoose";


mongoose.set('strictQuery', false);

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1/FullStack", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(">> DB Connect");
    } catch (error) {
        console.error('Error connecting to database:', error);
    }
}
