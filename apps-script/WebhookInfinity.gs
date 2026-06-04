// ============================================
// WEBHOOK INFINITY PAY - Rastreamento de Vendas
// ============================================
// Cole este código em um NOVO projeto do Google Apps Script
// Vá para: script.google.com > Novo Projeto > Cole este código

// Configurações
const CONFIG = {
  SHEET_ID: '1yFpgQSxnjHd3LMlImTe-sfEkaNQe-B8Ge2wnjQpYo_4',
  GA_MEASUREMENT_ID: 'G-K4Q81005P5',
  GA_API_SECRET: 'bLUE-QmdSTCkJhP4Hzxm4w'
};

/**
 * Endpoint principal que recebe os webhooks do Infinity Pay
 */
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    Logger.log('Webhook recebido: ' + JSON.stringify(data));
    
    // Valida se tem os dados necessários
    if (!data.transaction_nsu) {
      return ContentService
        .createTextOutput(JSON.stringify({ 
          success: false, 
          error: 'Dados incompletos - falta transaction_nsu' 
        }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // Registra a conversão no Google Analytics
    rastrearConversao(data);
    
    // Registra na planilha
    registrarVenda(data);
    
    // Responde com 200 OK (importante!)
    return ContentService
      .createTextOutput(JSON.stringify({ success: true, message: 'Webhook processado com sucesso' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch(err) {
    Logger.log('Erro em doPost: ' + err.message + ' | Stack: ' + err.stack);
    
    // Retorna 400 para o Infinity Pay tentar novamente
    return ContentService
      .createTextOutput(JSON.stringify({ 
        success: false, 
        error: err.message 
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Rastreia a conversão no Google Analytics
 */
function rastrearConversao(paymentData) {
  try {
    Logger.log('Rastreando conversão: ' + paymentData.transaction_nsu);
    
    // Prepara o payload para Google Analytics
    const payload = {
      client_id: paymentData.order_nsu || 'offline_' + paymentData.transaction_nsu,
      events: [{
        name: 'purchase',
        params: {
          transaction_id: paymentData.transaction_nsu,
          value: (paymentData.paid_amount / 100).toFixed(2),
          currency: 'BRL',
          payment_type: paymentData.capture_method || 'unknown',
          items: paymentData.items ? paymentData.items.length : 0
        }
      }]
    };

    // Envia para Google Analytics
    const options = {
      method: 'post',
      payload: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      },
      muteHttpExceptions: true
    };

    const url = `https://www.google-analytics.com/mp/collect?measurement_id=${CONFIG.GA_MEASUREMENT_ID}&api_secret=${CONFIG.GA_API_SECRET}`;
    const response = UrlFetchApp.fetch(url, options);
    
    Logger.log('GA Response: ' + response.getResponseCode());
    
    if (response.getResponseCode() !== 204 && response.getResponseCode() !== 200) {
      Logger.log('Aviso: GA retornou: ' + response.getResponseCode());
    }
    
  } catch(err) {
    Logger.log('Erro em rastrearConversao: ' + err.message);
    throw err;
  }
}

/**
 * Registra a venda na planilha
 */
function registrarVenda(data) {
  try {
    Logger.log('Registrando venda: ' + data.order_nsu);
    
    const spreadsheet = SpreadsheetApp.openById(CONFIG.SHEET_ID);
    let sheet = spreadsheet.getSheetByName('Vendas');

    // Cria a aba se não existir
    if (!sheet) {
      Logger.log('Criando aba Vendas...');
      sheet = spreadsheet.insertSheet('Vendas');
      sheet.appendRow([
        'Data/Hora', 
        'Order NSU', 
        'Transaction NSU', 
        'Valor (R$)', 
        'Valor Recebido (R$)', 
        'Parcelinhas', 
        'Método de Pagamento', 
        'Comprovante URL'
      ]);
    }

    // Adiciona a linha de venda
    sheet.appendRow([
      new Date().toLocaleString('pt-BR'),
      data.order_nsu || '',
      data.transaction_nsu,
      (data.amount / 100).toFixed(2),
      (data.paid_amount / 100).toFixed(2),
      data.installments || 1,
      data.capture_method || 'unknown',
      data.receipt_url || ''
    ]);

    Logger.log('Venda registrada com sucesso: ' + data.transaction_nsu);
    
  } catch(err) {
    Logger.log('Erro em registrarVenda: ' + err.message);
    throw err;
  }
}

/**
 * Função de teste (execute no Google Apps Script para testar)
 */
function testarWebhook() {
  const dadosTeste = {
    invoice_slug: 'abc123',
    amount: 10000, // R$ 100,00 em centavos
    paid_amount: 10100,
    installments: 1,
    capture_method: 'pix',
    transaction_nsu: '550e8400-e29b-41d4-a716-446655440000',
    order_nsu: 'order-123',
    receipt_url: 'https://comprovante.com/123',
    items: [{ description: 'Página Absurda', quantity: 1, price: 10000 }]
  };
  
  Logger.log('Testando com dados: ' + JSON.stringify(dadosTeste));
  rastrearConversao(dadosTeste);
  registrarVenda(dadosTeste);
  Logger.log('Teste concluído! Verifique a planilha e o Google Analytics');
}
