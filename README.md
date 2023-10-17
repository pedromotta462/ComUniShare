## ComUniShare

Projeto do grupo 10 

[link da aplicação](https://com-uni-share-odv18nr29-pedromotta462.vercel.app/)

## Screenshots

![App Screenshot](https://i.postimg.cc/8PcvQ4QM/screencapture-localhost-3000-2023-10-02-05-08-19.png)

## Diagrama de Classes

```mermaid
classDiagram
  class Usuario {
    +id: int
    +nome: string
    +endereco: string
    +contato: string
    +perfil: string
    +Registrar()
    +Autenticar()
    +ListarItensCompartilhados()
    +ListarServicosOferecidos()
    +RealizarTransacao()
    +IniciarChat(Usuario destinatario)
    +EnviarMensagem(Usuario destinatario, string mensagem)
  }

  class ItemCompartilhavel {
    +id: int
    +nome: string
    +descricao: string
    +dono: Usuario
    +Listar()
    +Adicionar()
    +Remover()
  }

  class ServicoCompartilhavel {
    +id: int
    +nome: string
    +descricao: string
    +prestador: Usuario
    +Listar()
    +Adicionar()
    +Remover()
  }

  class Transacao {
    +id: int
    +data: DateTime
    +usuarioRequisitante: Usuario
    +usuarioOfertante: Usuario
    +itemCompartilhavel: ItemCompartilhavel
    +servicoCompartilhavel: ServicoCompartilhavel
    +Registrar()
    +Aprovar()
    +Rejeitar()
    +Finalizar()
  }

  class Feedback {
    +id: int
    +avaliacao: int
    +comentario: string
    +usuario: Usuario
    +itemCompartilhavel: ItemCompartilhavel
    +servicoCompartilhavel: ServicoCompartilhavel
    +Registrar()
    +Editar()
    +Excluir()
  }

  class Chat {
    +id: int
    +mensagens: string[]
    +participantes: Usuario[]
    +Iniciar(Usuario participante1, Usuario participante2)
    +EnviarMensagem(Usuario remetente, string mensagem)
  }

  class SistemaNotificacoes {
    +EnviarNotificacaoEmail(Usuario destinatario, string mensagem)
    +EnviarNotificacaoPush(Usuario destinatario, string mensagem)
  }

  class RedesSociais {
    +CompartilharItem(ItemCompartilhavel item)
    +CompartilharServico(ServicoCompartilhavel servico)
  }

  Usuario *-- ItemCompartilhavel : Possui
  Usuario *-- ServicoCompartilhavel : Oferece
  Usuario *-- Transacao : Participa
  Usuario *-- Feedback : Escreve
  Usuario *-- Chat : Inicia, EnviaMensagem
  Transacao -- ItemCompartilhavel : Inclui
  Transacao -- ServicoCompartilhavel : Inclui
  Transacao --* Usuario : Requisitante
  Transacao --* Usuario : Ofertante
  Feedback -- ItemCompartilhavel : ReferenteA
  Feedback -- ServicoCompartilhavel : ReferenteA
  Chat --* Usuario : Participa, EnviaMensagem
  SistemaNotificacoes --* Usuario : EnviaNotificacaoEmail, EnviaNotificacaoPush
  RedesSociais --* Usuario : CompartilharItem, CompartilharServico

```
##

## References

[NextJS] [https://nextjs.org/]

[ShadcnUI] [https://ui.shadcn.com/]

[TailwindCSS] [https://tailwindcss.com/]
