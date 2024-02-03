"use client"

import { StyledInput } from "@/components/StyledComponents/Input"
import { StyledPageContainer } from "@/components/StyledComponents/PageContainer"
import { StyledHeading3 } from "@/components/StyledComponents/Heading3"
import { Logo } from "@/components/Logo"
import { StyledFlexContainer } from "@/components/StyledComponents/FlexContainer"
import { StyledCheckbox } from "@/components/StyledComponents/Checkbox"
import { StyledText } from "@/components/StyledComponents/Text"

import { StyledLink } from "@/components/StyledComponents/Link"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { LoginHandler } from "@/api-functions/authenticate/login"
import { setUserInfos } from "@/utils/userInfo"
import { useRouter } from "next/navigation"
import { StyledFormButton } from "@/components/StyledComponents/FormButton"
import { zodResolver } from "@hookform/resolvers/zod"
import { useNotificationStore } from "@/stores/useNotificationStore"
import { Notification } from "@/components/Notification"

const HOURS_IN_DAY = 24
const MINUTES_IN_HOUR = 60
const SECCONDS_IN_MINUTES = 60
const MILISECCONDS_IN_SECCOND = 1000

const TOTAL_OF_MILISECCONDS_IN_A_DAY =
  HOURS_IN_DAY * MINUTES_IN_HOUR * SECCONDS_IN_MINUTES * MILISECCONDS_IN_SECCOND

const zodSchema = z.object({
  email: z
    .string()
    .email("Forneça um email válido. Exemplo: email@provedor.com"),
  password: z.string().min(5, "A senha deve conter, pelo menos, 5 dígitos"),
  persistLogin: z.boolean(),
})

type FormSchema = z.infer<typeof zodSchema>

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitted },
  } = useForm<FormSchema>({
    resolver: zodResolver(zodSchema),
    defaultValues: {
      email: "luizfelipesouza1998@outlook.com",
      password: "senha000",
      persistLogin: true,
    },
  })

  const navigate = useRouter()

  const { toggleNotification } = useNotificationStore()


  const onSubmit = handleSubmit(async (formData) => {
    const response = await LoginHandler({
      email: formData.email,
      password: formData.password,
    })

    const user = response?.data

    if (!user) {
      toggleNotification("Email ou senha inválidos.")
      return
    }

    // Sei que o ideal não seria aqui, mas usei para cumprir um dos requisitos que era usar o localStorage
    if (formData.persistLogin) {
      const amountOfDays = 5

      const totalOfDaysToAddInMilisecconds =
        amountOfDays * TOTAL_OF_MILISECCONDS_IN_A_DAY

      const fakeJWT = JSON.stringify({
        expiresIn:
          new Date().getMilliseconds() + totalOfDaysToAddInMilisecconds,
        jwt: "fake_token",
      })

      localStorage.setItem("userFakeJWT", fakeJWT)
    }

    setUserInfos(user)

    navigate.push("/")
  })

  return (
    <StyledPageContainer as="form" onSubmit={onSubmit} $maxW="25rem">
      <Logo />

      <StyledHeading3 color="#FF0000" $mb="0">
        Bem vindo(a) de volta!
      </StyledHeading3>
      <StyledText $fontSize="1.5rem" $mb="2rem">
        Acesse sua conta:
      </StyledText>

      <StyledInput
        type="email"
        autoComplete="email"
        placeholder="Usuário"
        $hasError={!!errors?.email}
        {...register("email")}
      />

      <StyledInput
        type="password"
        autoComplete="current-password"
        placeholder="Senha"
        $hasError={!!errors?.password}
        {...register("password")}
      />

      <StyledFlexContainer $mb="2rem">
        <StyledFlexContainer as="label" $gap=".5rem">
          <StyledCheckbox type="checkbox" {...register("persistLogin")} />
          <StyledText $mb="0">Salvar login</StyledText>
        </StyledFlexContainer>

        <StyledText $mb="0">
          <StyledLink href="/recuperar-senha">Esqueci a senha</StyledLink>
        </StyledText>
      </StyledFlexContainer>

      <StyledFormButton type="submit" disabled={isSubmitting}>
        Entrar
      </StyledFormButton>
      <StyledText>
        Ainda não tem o login?{" "}
        <StyledLink $color="#FF0000" href="/criar-conta">
          Cadastre-se
        </StyledLink>
      </StyledText>

      <Notification />
    </StyledPageContainer>
  )
}
