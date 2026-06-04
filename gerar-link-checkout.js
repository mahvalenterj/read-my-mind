/**
 * Script para gerar link de checkout via API Infinity Pay
 * Use: node gerar-link-checkout.js
 */

import https from 'https';

const HANDLE = 'marianna-correa'; // Sem o $ do início
const REDIRECT_URL = 'https://paginaabsurda.top/obrigado';
const WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbx-aAn6St4pbYYazIsM87Yceec9zlHLGCUPcseGYW4QN3dqyE1e3HTz4vEJlNglZZ1wbA/exec';

// Dados do produto (Landing Page - Alta Conversão)
const payload = {
  handle: HANDLE,
  redirect_url: REDIRECT_URL,
  webhook_url: WEBHOOK_URL,
  order_nsu: `order-${Date.now()}`, // Gera um ID único baseado no timestamp
  items: [
    {
      quantity: 1,
      price: 100, // R$ 1,00 em centavos
      description: 'Teste'
    }
  ]
};

// Fazer requisição para API
const options = {
  hostname: 'api.checkout.infinitepay.io',
  path: '/links',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': JSON.stringify(payload).length
  }
};

const req = https.request(options, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    console.log('\n✅ Resposta da API:');
    console.log('Status:', res.statusCode);
    
    try {
      const response = JSON.parse(data);
      if (response.url) {
        console.log('\n🔗 Link de Checkout Gerado:\n');
        console.log(response.url);
      } else {
        console.log('\n❌ Erro da API:');
        console.log(JSON.stringify(response, null, 2));
      }
      console.log('\n📋 Dados da Requisição:');
      console.log('Order NSU:', payload.order_nsu);
      console.log('Valor: R$ 1,00');
      console.log('Redirect URL:', REDIRECT_URL);
      console.log('Webhook URL:', WEBHOOK_URL);
    } catch (err) {
      console.log('Resposta:', data);
    }
  });
});

req.on('error', (error) => {
  console.error('❌ Erro na requisição:', error);
});

console.log('📤 Gerando link de checkout...\n');
console.log('Dados enviados:');
console.log(JSON.stringify(payload, null, 2));

req.write(JSON.stringify(payload));
req.end();
