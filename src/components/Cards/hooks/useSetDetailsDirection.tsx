import { RefObject, useEffect, useState } from "react"

type Props = {
  elementRef: RefObject<HTMLElement>
  effectUpdater: any
  flipDirectionIn?: number
}
/**
 *
 * Usado para verificar a distância entre um dado elemento e a parte esquerda da tela.
 * A depender da distância, será retornado o modelo de abertura "flex-row-reverse" para esquerda, "flex-row" para direita.
 *
 * @hook
 * @elementRef é um elemento retornado pelo useRef().
 * @effectUpdater variável que deverá ser usada para atualizar o valor do hook.
 * @flipDirectionIn define em qual distância da esquerda deve mudar a direção.
 */
export const useSetDetailsDirection = ({
  elementRef,
  effectUpdater,
  flipDirectionIn = 600,
}: Props) => {
  const [detailsDirection, setDetailsDirection] = useState<
    "flex-row" | "flex-row-reverse"
  >("flex-row")

  useEffect(() => {
    const currentElement = elementRef.current?.getBoundingClientRect()

    const currentDistanceFromLeft = currentElement?.left ?? 0

    const shouldDisplayOnLeft = currentDistanceFromLeft >= flipDirectionIn

    if (shouldDisplayOnLeft) {
      setDetailsDirection("flex-row-reverse")
      return
    }
    setDetailsDirection("flex-row")
  }, [elementRef, effectUpdater, setDetailsDirection, flipDirectionIn])

  return { detailsDirection }
}
