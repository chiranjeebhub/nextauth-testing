// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

import prisma from "../../../prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const session = await getServerSession(req, res, authOptions);
    if (!session) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // Get User

    const prismaUser = await prisma.user.findUnique({
      where: { email: session?.user?.email },
      //   select: { id: true },
    });

    // Body Check

    const { title } = req.body;
    if (title.length > 300) {
      return res.status(403).json({ message: "Post is too long" });
    }
    if (!title.length) {
      return res.status(403).json({ message: "Please Write Something..." });
    }

    // Create Post

    try {
      const result = await prisma.post.create({
        data: {
          title,
          userId: prismaUser?.id,
        },
      });
      res.status(200).json(result);
    } catch (error) {
      res.status(403).json({ message: "Error while Creating Post" });
    }

    // const result = await prisma
  }
}
