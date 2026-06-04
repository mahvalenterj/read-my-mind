# Configuração do Webhook Infinity Pay

## ✅ O que foi feito:

1. **Code.gs** - Restaurado para apenas guardar leads
2. **WebhookInfinity.gs** - Criado com todo o código do webhook

---

## 📋 Passo a Passo:

### 1️⃣ Criar novo projeto no Google Apps Script

1. Acesse: https://script.google.com
2. Clique em **"Novo Projeto"**
3. Nomeie: **"Webhook Infinity Pay"**

### 2️⃣ Copiar o código

1. Abra o arquivo [WebhookInfinity.gs](WebhookInfinity.gs) neste repositório
2. Copie **TODO** o conteúdo do arquivo
3. Abra o novo projeto do Google Apps Script
4. Substitua o conteúdo do `Code.gs` pelo código copiado

### 3️⃣ Salvar e Deploy

1. Clique em **Salvar**
2. Clique em **Implantar** (no topo)
3. Clique em **Novo Implante**
4. Selecione:
   - **Tipo:** Aplicativo Web
   - **Executar como:** Sua conta
   - **Quem tem acesso:** Qualquer pessoa
5. Clique em **Implantar**
6. **Copie a URL gerada** (será algo como: `https://script.google.com/macros/d/...`)

### 4️⃣ Configurar no Infinity Pay

1. Acesse seu dashboard do Infinity Pay
2. Vá em: **Criar seu Checkout** > **Depois do pagamento** > **Integrações**
3. Cole a URL no campo **"URL do Webhook"**
4. Clique em **"Teste a integração"**

---

## 🧪 Como testar:

No Google Apps Script:

1. Selecione a função: **testarWebhook**
2. Clique em **Executar** (play)
3. Verifique:
   - A aba **"Vendas"** da sua planilha recebeu uma linha de teste
   - Vá para Google Analytics e verifique o evento de compra em **Relatórios > Eventos**

---

## 📊 Dados que serão rastreados:

✅ **Na Planilha (aba "Vendas"):**
- Data/Hora da venda
- Order NSU
- Transaction NSU
- Valor da venda
- Valor recebido
- Forma de pagamento (PIX, Cartão)
- Link do comprovante

✅ **No Google Analytics:**
- Evento: `purchase`
- Valor da conversão
- ID da transação
- Forma de pagamento

---

## 🔧 Se algo não funcionar:

1. Verifique os **Logs** no Google Apps Script (Execução > Logs)
2. Confirme que as credenciais estão corretas
3. Teste a função `testarWebhook()` primeiro

---

**Pronto! Agora suas vendas serão rastreadas automaticamente! 🚀**
