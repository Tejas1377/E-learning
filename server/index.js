import express from "express";
import dotenv from "dotenv";
import connectdb from "./database/db.js";
import userRoute from "./routes/user.route.js";

dotenv.config({});

connectdb();

const app = express();

const PORT = process.env.PORT || 3000;

app.use("/api/v1/user", userRoute);
 
app.get("/home", (_, res) =>{
    res.status(200).json({
        success: true,
        message: "Hello i am comming from backend"
    })
})

app.listen(PORT, () => {
  console.log(`Server listen at port ${PORT}`);
});
