![GitHub top language](https://img.shields.io/github/languages/top/fddaineze/twitch-open-dyslexic)
![GitHub stars](https://img.shields.io/github/stars/fddaineze/twitch-open-dyslexic.svg)
![github badge](https://badgen.net/badge/icon/github?icon=github&label)
![license badge](https://badgen.net/github/license/fddaineze/twitch-open-dyslexic)
![last commit badge](https://badgen.net/github/last-commit/fddaineze/twitch-open-dyslexic)
![commits badge](https://badgen.net/github/commits/fddaineze/twitch-open-dyslexic)

## Twitch OpenDyslexic 

Extensão do google chrome para Auxilio a pessoas com dislexia
- Troque a fonte do chat para OpenDyslexic
- Aumente ou diminua a fonte
- As configurações ficam salvas para qualquer stream que você abrir

Compatível com:
- Google Chrome
- OperaGX
- Firefox

### Download

Você pode realizar o download da última versão através [DESTE LINK](https://github.com/fddaineze/twitch-open-dyslexic/releases/tag/v1.0.0).

### Instalação

1. Salve a pasta da extensão em seu computador e a descompacte.
2. Acesse chrome://extensions/.
3. No canto superior direito, ative o Modo do desenvolvedor.
4. Clique em Carregar sem compactação.
5. Encontre e selecione a pasta do app ou extensão.
6. Verifique ao lado da barra de endereço se ele foi carregado e funciona corretamente.

### Como funciona

Ela adiciona um novo menu acima do chat da Twitch, ele seguirá o mesmo padrão de cor e tamanho do chat original, apenas adicionando novas funções.

Você pode utilizá-lo tanto em streams normais como em popouts

> **Dica:** use twitch.tv/<channel_name>/chat para abrir o popup
> *exemplo:* twitch.tv/fddaineze/chat

### Parte técnica (curiosidades)
O css busca a fonte do meu repositório github.io, para aplicar basta usar "font-family: OpenDyslexic;"
```js
@font-face {
    font-family: OpenDyslexic;
    src: url(https://fddaineze.github.io/demo/font/OpenDyslexic-Regular.woff2);
}
```
