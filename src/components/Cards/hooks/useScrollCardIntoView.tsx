import { RefObject, useEffect } from "react"

type Props = {
  elementRef: RefObject<HTMLElement>
  shouldScroll: boolean
  cardDetailsDirection: "flex-row-reverse" | "flex-row"
}
/**
 *
 * Usado para scrollar o card aberto para área visível da tela..
 * A depender da distância, será scrollado para direita ou para esquerda.
 * @hook
 * @elementRef é um elemento retornado pelo useRef().
 * @shouldScroll é o que determina se o hook deve ou não executar.
 * @cardDetailsDirection Valor retornado do hook useSetDetailsDirection, determina a direção do scroll.
 */
export const useScrollCardIntoView = ({
  shouldScroll,
  elementRef,
  cardDetailsDirection,
}: Props) => {
  useEffect(() => {
    if (!shouldScroll) return

    const scrollElement = elementRef.current?.parentElement

    const shouldScrollLeft = cardDetailsDirection === "flex-row-reverse"

    scrollElement?.scrollBy({
      left: shouldScrollLeft ? 400 : -400,
    })
  }, [shouldScroll, elementRef, cardDetailsDirection])
}
