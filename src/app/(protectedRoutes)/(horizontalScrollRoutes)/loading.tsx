import { LoadingCard } from "@/components/Cards/LoadingCard"
import { ScrollableContainer } from "@/components/ScrollableContainer"

export default function HorizontalScrollRoutesLoading() {
  return (
    <ScrollableContainer>
      <LoadingCard />
      <LoadingCard />
      <LoadingCard />
      <LoadingCard />
      <LoadingCard />
      <LoadingCard />
    </ScrollableContainer>
  )
}
