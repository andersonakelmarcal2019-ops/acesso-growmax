# Guia de Integração e Webhook

## Opção 1: Senha Fixa (Já Implementada - Recomendada)
Atualmente, configuramos o sistema para usar a **Senha Mestra: `aluno968`**.
**Você NÃO precisa configurar Webhooks para isso funcionar.**

**Como funciona agora:**
1. O aluno compra.
2. O sistema de pagamento (GGcheckout) envia um email automático para o aluno dizendo: "Seu acesso é: email de compra + senha `aluno968`".
3. O aluno entra no seu site, digita esses dados e o acesso é liberado automaticamente.

*Esta é a solução mais simples, rápida e que não exige banco de dados externo ou custos adicionais.*

---

## Opção 2: Integração Real via Webhook (Avançado)
Se você deseja que o acesso seja liberado **apenas** se o pagamento for confirmado em tempo real pelo sistema (sem senha fixa), você precisará de uma infraestrutura mais complexa.

**O problema técnico:**
Seu site atual é "Estático" (roda apenas no celular do cliente).
Um Webhook é uma mensagem de Servidor para Servidor. O celular do cliente não recebe Webhooks.
Portanto, para usar Webhook, você precisa de um "Cérebro" na nuvem (Banco de Dados) para receber a mensagem da GGcheckout e guardar a informação "O email joao@gmail.com pagou".

**Requisitos para mudar para Webhook:**
1. **Banco de Dados Online**: Criar uma conta no Supabase, Firebase ou MongoDB (Serviços externos).
2. **API Backend**: Criar uma pasta `api/webhook.js` na Vercel para receber os dados da GGcheckout.
3. **Conexão**: Programar o `webhook.js` para salvar o pagamento no Banco de Dados.
4. **Login**: Reescrever o `script.js` do site para, ao invés de verificar a senha fixa, conectar no Banco de Dados e perguntar "Este email pagou?".

**Conclusão:**
A menos que você tenha um desenvolvedor Backend para configurar o Banco de Dados, **recomendamos manter a Opção 1 (Senha Fixa)**, que já resolve o problema de acesso imediato sem complexidade técnica.
