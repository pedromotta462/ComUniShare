## ComUniShare

Projeto do grupo 10 

[link da aplicação](https://com-uni-share.vercel.app/)

## Screenshots

![App Screenshot](https://i.postimg.cc/8PcvQ4QM/screencapture-localhost-3000-2023-10-02-05-08-19.png)

## Diagrama de Classes

```mermaid
classDiagram
  class Usuario {
    -id: int
    -nome: string
    -email: string
    -senha: string
    -endereco: string
    -contato: string
    -perfil: string
    +registrar(email: string, senha: string)
    +autenticar(email: string, senha: string)
    +listarItensCompartilhados()
    +listarServicosOferecidos()
    +realizarTransacao(compartilhavel: Compartilhavel)
    +iniciarChat(destinatario: Usuario)
    +enviarMensagem(destinatario: Usuario, mensagem: string)
    +criarCompartilhavel(tipo: string, nome: string, descricao: string, preco: double)
  }

  class Compartilhavel {
    -id: int
    -nome: string
    -descricao: string
    -dono: Usuario
    -tipo: string
    -preco: double
    +listar()
    +adicionar()
    +remover()
    +compartilhar(redesSociais: string)
  }

  class Transacao {
    -id: int
    -data: Date
    -usuarioRequisitante: Usuario
    -usuarioOfertante: Usuario
    -compartilhavel: Compartilhavel
    +registrar()
    +aprovar()
    +rejeitar()
    +finalizar()
  }

  class Feedback {
    -id: int
    -avaliacao: int
    -comentario: string
    -usuario: Usuario
    -compartilhavel: Compartilhavel
    +registrar()
    +editar()
    +excluir()
  }

  class Chat {
    -id: int
    -mensagens: string[]
    -participantes: Usuario[]
    +iniciar(participante1: Usuario, participante2: Usuario)
    +enviarMensagem(remetente: Usuario, mensagem: string)
  }

  class NotificacoesService {
    -id: int
    -titulo: string
    -descricao: string
    -data: Date
    +enviarNotificacaoEmail(destinatario: Usuario)
  }

  Usuario "1" -- "N" Compartilhavel : possui
  Usuario "1" -- "N" Transacao : participa
  Usuario "1" -- "N" Feedback : escreve
  Usuario "1" -- "N" Chat : inicia, enviaMensagem
  Transacao "1" -- "1" Compartilhavel : inclui
  Transacao "1" -- "N" Usuario : requisitante
  Transacao "1" -- "N" Usuario : ofertante
  Feedback "1" -- "1" Compartilhavel : referenteA
  Chat "N" -- "N" Usuario : participa, enviaMensagem
  NotificacoesService "N" -- "1" Usuario : enviarNotificacaoEmail

```
##

## References

[NextJS] [https://nextjs.org/]

[ShadcnUI] [https://ui.shadcn.com/]

[TailwindCSS] [https://tailwindcss.com/]
