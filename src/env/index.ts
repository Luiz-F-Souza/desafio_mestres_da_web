// import { z } from "zod"

// const envSchema = z.object({
//   NEXT_PUBLIC_VERCEL_API_URL: z
//     .string()
//     .url("❌ ENV: Forneça uma URL para NEXT_PUBLIC_VERCEL_API_URL"),
//   NEXT_PUBLIC_VERCEL_ENV: z.enum(["development", "preview", "production"]),
// })

// const safeParse = envSchema.safeParse(process.env)

// if (!safeParse.success) {
//   if (process.env.NEXT_PUBLIC_VERCEL_ENV === "development") {
//     throw new Error(
//       `O ambiente .env.local deve ser configurado corretamente. Erro: ${safeParse.error.message}`
//     )
//   }
// }

// export const env = safeParse.data
