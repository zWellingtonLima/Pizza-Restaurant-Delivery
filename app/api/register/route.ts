import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

import prisma from "@/lib/prismadb";

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    const hashedPassword = await bcrypt.hash(password, 12);

    // const existingUser = await prisma.user.findUnique({
    //   where: {
    //     email,
    //   },
    // });

    // let hasPromotion = true;

    // if (existingUser) hasPromotion = false;

    const user = await prisma.user.create({
      data: {
        email,
        name,
        hashedPassword,
        hasPromotion: true,
      },
    });

    return NextResponse.json(user)
  } catch (error) {
    console.log("[REGISTER_POST]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
