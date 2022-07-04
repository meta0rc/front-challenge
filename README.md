### Projeto Finalizado. 
Utilizei styled-components para estilização do projeto, e criei alguns Custom Hooks tanto para consumir o conteúdo da APi e também um para usar a lib do toastfy. 

Criei uma página de "esqueceu a senha", apesar de não estar no Design Figma e uma pagina privada "/authenticate" que consome uma Api de nomes, para simular o usuário que logar com os dados corretos. Ao logar corretamente, o redirect é efetuado criando um cookie da lib "js-cookie"

**Features que gostei de implementar**
- Novas pages("/authenticate", "/forgot")
- Desygn System - "inputs, buttons, texts"  <- Padronização desses components para que no futuro, novas feautures, telas, etc, possam ser implementadas, usando os mesmos. 
- Custom Hooks - "useApi", "useToastfy" <- Com eles, as chamadas APi e as notificações são implementadas facilmente. 

Projeto está disponivel na vercel

https://front-challenge-gabriel.vercel.app/


**Instalação** 

Clone o repo e rode 
npm install
npm run dev