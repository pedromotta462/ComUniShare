## ComUniShare

Projeto do grupo 10 

[link da aplicação](https://com-uni-share-odv18nr29-pedromotta462.vercel.app/)

## Screenshots

![App Screenshot](https://i.postimg.cc/8PcvQ4QM/screencapture-localhost-3000-2023-10-02-05-08-19.png)

## Diagrama de Classes

classDiagram
  class User {
    +Nome: string
    +Endereço: string
    +Informações de Contato: string
    +Perfil: string
  }

  class ItemCompartilhavel {
    +Nome: string
    +Descrição: string
    +Dono: User
  }

  class ServicoCompartilhavel {
    +Nome: string
    +Descrição: string
    +Prestador: User
  }

  class Transacao {
    +Data: Date
    +ItemCompartilhavel: ItemCompartilhavel
    +ServicoCompartilhavel: ServicoCompartilhavel
    +Avaliação: Feedback
  }

  class Feedback {
    +Avaliação: string
    +Comentário: string
  }

  User --* ItemCompartilhavel : Compartilha
  User --* ServicoCompartilhavel : Oferece
  User --* Transacao : Participa
  Transacao --* ItemCompartilhavel : Inclui
  Transacao --* ServicoCompartilhavel : Inclui
  Transacao --* Feedback : Recebe


## References

[NextJS] [https://nextjs.org/]

[ShadcnUI] [https://ui.shadcn.com/]

[TailwindCSS] [https://tailwindcss.com/]
