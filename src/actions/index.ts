import { z } from "astro/zod";
import { defineAction } from "astro:actions";
import { db, cookieConsent } from "astro:db";
import { randomUUID } from "node:crypto";

export const server = {
    addConsent: defineAction({
        accept: "form",
        input: z.object({
            gaConsent: z.boolean(),
            ipConsent: z.boolean(),
        }),
        handler: async ({ gaConsent, ipConsent }, context) => {
            const id = randomUUID();
            const ip = context.clientAddress ?? "unknown";
            const createAt = new Date();

            const res = await db
                .insert(cookieConsent)
                .values({ id, ipConsent, ip, gaConsent, createAt })
                .returning();
        }
    }),

    listConsent: defineAction({
        accept: "json",
        handler: async () => {
            const consents = await db.select().from(cookieConsent).all();
            console.log('Retrieved consents from database:', consents);
            return consents;
        }
    })
}
