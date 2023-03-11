// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
// import { getServerSession } from "next-auth/next";
// import { authOptions } from "../auth/[...nextauth]";

import prisma from "../../../prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    // Get Posts

    try {
      const result = await prisma.post.findMany({
        include: {
          user: true,
        },
        orderBy: {
          createdAt: "desc",
        },
      });
      res.status(200).json(result);
    } catch (error) {
      res.status(403).json({ message: "Could not get any Posts" });
    }

    // const result = await prisma
  }
}
