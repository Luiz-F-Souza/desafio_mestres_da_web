# InfomationCard

## Exemplo de uso Simples

```tsx
{
  allHeros?.map((hero) => {
    const isCurrentCardOpen = slug === hero.nameSlug
    return (
      <InformationCard
        key={hero.id}
        description={hero.description}
        cardSlug={hero.nameSlug}
        title={hero.name}
        imageURL={hero.imageUrl}
        pageSlug={searchParams?.slug}
      >
        <HeroMoreDetails
          isOpen={isCurrentCardOpen}
          title={hero.name}
          heroDetails={isCurrentCardOpen ? heroDetails : undefined}
        />
      </InformationCard>
    )
  })
}
```

## Exemplo com ScrollableContainer (mais usado)

### Normalmente será usado junto com o `ScrollableContainer`

```tsx
<ScrollableContainer>
  {allHeros?.map((hero) => {
    const isCurrentCardOpen = slug === hero.nameSlug
    return (
      <InformationCard
        key={hero.id}
        description={hero.description}
        cardSlug={hero.nameSlug}
        title={hero.name}
        imageURL={hero.imageUrl}
        pageSlug={searchParams?.slug}
      >
        <HeroMoreDetails
          isOpen={isCurrentCardOpen}
          title={hero.name}
          heroDetails={isCurrentCardOpen ? heroDetails : undefined}
        />
      </InformationCard>
    )
  })}
</ScrollableContainer>
```

## Observações

- O children deve ser um container para ser exibido apenas quando o card estiver aberto.
