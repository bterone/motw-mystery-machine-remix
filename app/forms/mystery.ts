import { z } from "zod";

export const mysteryParams = z.object({
  title: z.string().min(1), // .min(1) to prevent empty string, .nonempty() is depreceated
  concept: z.optional(z.string()),
  hook: z.optional(z.string()),
  day: z.optional(z.string()),
  shadows: z.optional(z.string()),
  dusk: z.optional(z.string()),
  nightfall: z.optional(z.string()),
  midnight: z.optional(z.string()),
  notes: z.optional(z.string()),
  secrets: z.optional(z.string()),
  userId: z.string().min(1),
});
