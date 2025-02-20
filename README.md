## 🚫 Autenticação SENAI

### Especificação
- Projeto para padronização de autenticação de projetos, utilizando-o como base para trabalhos futuros. Alguns pontos serão necessários para a solução final, no tópico abaixo, estarão todos os pontos necessários.

### 📌 Estrutura do Backend
- O backend já vai configurado, para efetuar o envio do token e se comunicar com o NextAuth da aplicação Next.
 
### ✅ Critérios de Aceite
#### [1.0.0] Role Admin
Exibir um Navbar com as seguintes rotas:

🏠 Home
- No main da página [Home], renderizar `Olá, ${nomedoUsuário}! (:role:)`
- `Exemplo:` "Olá, João! (Admin)"

👥 Usuários

⚙️ Configuração

📤 Log out



*Para a role Admin, será necessário criar refresh token. Ou seja, o admin deverá ficar com acesso sem tempo de expiração, utilizando refresh token.*

#### [1.1.0] Role User
Exibir um Navbar com as seguintes rotas:

🏠 Home
- No main da página [Home], renderizar `Olá, ${nomedoUsuário}! (:role:)`
- `Exemplo:` "Olá, João! (User)"

⚙️ Configuração

📤 Log out



*Para a role User, será necessário criar access token. Ou seja, o user deverá ficar com acesso até no máximo 1min, seguido de um aviso e após o aviso um timeout.*


#### [2.0.0] Providers
- Será necessário, as alternativas de login com Google, Github e Facebook.

📜 Licença

Este projeto é de uso interno e segue as diretrizes do SENAI.

👨‍💻 Desenvolvido por Equipe SENAI