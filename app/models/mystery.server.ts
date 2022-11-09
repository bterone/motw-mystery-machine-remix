import type { User } from "@prisma/client";

import { prisma } from "~/db.server";

export interface Mystery {
  title: string;
  concept?: string;
  hook?: string;
  day?: string;
  shadows?: string;
  dusk?: string;
  nightfall?: string;
  midnight?: string;
  notes?: string;
  secrets?: string;
  userId: string;
}

export function getMysteryListItems({ userId }: { userId: User["id"] }) {
  return prisma.mystery.findMany({
    where: { userId },
    orderBy: { updatedAt: "desc" },
  });
}

export function createMystery({
  title,
  concept,
  hook,
  day,
  shadows,
  dusk,
  nightfall,
  midnight,
  notes,
  secrets,
  userId,
}: Mystery) {
  return prisma.mystery.create({
    data: {
      title,
      concept,
      hook,
      day,
      shadows,
      dusk,
      nightfall,
      midnight,
      notes,
      secrets,
      user: {
        connect: {
          id: userId,
        },
      },
    },
  });
}
