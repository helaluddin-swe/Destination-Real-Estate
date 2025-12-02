import bcrypt from "bcrypt";
import prisma from "../src/lib/prisma.config.js";



export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body

    // 1️⃣ Hash the password
    const hashedPassword = await bcrypt.hash(password, 10)
    console.log("Hashed password:", hashedPassword)

    // 2️⃣ Create a new user in the database
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    })

    console.log("New User:", newUser)
    res.status(201).json({ message: "User registered successfully", user: newUser })
  } catch (error) {
    console.error("Error creating user:", error)
    res.status(500).json({ error: error.message })
  }
}

export const login = (req, res) => {
  console.log("login endpointen");
};
export const logout = (req, res) => {
  console.log("logout endpointen");
};
