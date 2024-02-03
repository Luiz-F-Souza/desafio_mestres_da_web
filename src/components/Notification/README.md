# Notification

Deve ser utilizado apenas dentro de componentes `use client`

O componente `Notification` faz o display de uma mensagem no topo da página por 5 segundos.
Para o utilizar é necessário importar o `useNotificationStore` e desestruturar a `toggleNotification` e passar a mensagem que deseja chamar para ela.

## Exemplo de uso Simples

```tsx
const { toggleNotification } = useNotificationStore()

// Seu código

if (something) toggleNotification("Mensagem que será exibida por 5 segundos no topo da tela")

// Restante do código

// No final da página em questão ou dentro do layout do componente (se este for client)
    <Notification />

```
