import bcrypt from "bcrypt";
import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const main = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Name, email, and password are required",
      });
    }

    // Check existing user
    const existingUser = await prisma.user.findFirst({
      where: { email },
    });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const hashPassword = await bcrypt.hash(password, 10);

    // Create user
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashPassword,
      },
    });

    console.log(newUser);

    res.status(201).json({ message: "User created", newUser });

  } catch (error) {
    console.log(error);

    // Prisma unique constraint error P2002
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2010") {
        return res.status(400).json({
          message: "Email already exists in the database",
        });
      }
    }

    res.status(500).json({ message: "Server error" });
  }
};

export default main;
