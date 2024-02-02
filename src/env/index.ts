import {z} from "zod"

const envSchema = z.object({
    NEXT_PUBLIC_VERCEL_URL: z.string().url("❌ ENV: Forneça uma URL para NEXT_PUBLIC_VERCEL_URL"),
    NEXT_PUBLIC_VERCEL_ENV: z.enum(["development", "preview","production"])
})

const safeParse = envSchema.safeParse(process.env)

if(!safeParse.success){
    throw new Error("O ambiente .env.local deve ser configurado corretamente. Confira o .env.exemple")
}

export const env = safeParse.data