// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import bcrypt from "bcryptjs";
// import Admin from "./src/models/Admin.js"; // adjust path if needed

// dotenv.config();
// const MONGO_URI = process.env.MONGO_URI;

// // Wrap everything in an async function
// const main = async () => {
//   try {
//     // 1️⃣ Connect to DB
//     await mongoose.connect(MONGO_URI);
//     console.log("Connected to DB");

//     // 2️⃣ Check if admin already exists
//     const existingAdmin = await Admin.findOne({ email: "mutugidavid@gmail.com" });
//     if (existingAdmin) {
//       console.log("Admin already exists");
//       return process.exit(0);
//     }

//     // 3️⃣ Hash password and create admin
//     const hashedPassword = await bcrypt.hash("@Danetjitu123", 10);
//     const admin = new Admin({
//       email: "mutugidavid@gmail.com",
//       password: hashedPassword,
//     });

//     await admin.save();
//     console.log("Admin user created");

//     process.exit(0); // clean exit
//   } catch (err) {
//     console.error("Error creating admin:", err);
//     process.exit(1);
//   }
// };

// main();
