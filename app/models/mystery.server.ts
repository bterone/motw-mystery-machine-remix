import type { User } from "@prisma/client";

import { prisma } from "~/db.server";

export function getMysteryListItems({ userId }: { userId: User["id"] }) {
  return prisma.mystery.findMany({
    where: { userId },
    orderBy: { updatedAt: "desc" },
  });
}
