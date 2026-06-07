// ============================================
// DEBUG - Teste o webhook com dados simulados
// ============================================

/**
 * EXECUTE ESTA FUNÇÃO no Apps Script para testar se tudo funciona
 * Vai para: script.google.com > Escolha o projeto > Executar "testarWebhookDebug"
 */
function testarWebhookDebug() {
  Logger.log('========== INICIANDO TESTE DO WEBHOOK ==========');
  
  // Simula os dados que DEVERIAM vir do Infinity Pay
  const dadosTeste = {
    // Dados que o Infinity Pay manda
    invoice_slug: 'test-' + Date.now(),
    amount: 5000, // R$ 50,00 em centavos (0,50 é 50 centavos)
    paid_amount: 5000,
    installments: 1,
    capture_method: 'pix',
    
    // CRÍTICO: Estes campos PRECISAM estar no webhook real
    transaction_nsu: 'TEST-' + Date.now(),
    order_nsu: 'ORDER-TEST-' + Date.now(),
    receipt_url: 'https://comprovante.teste.com/123'
  };
  
  Logger.log('1. Dados de teste: ' + JSON.stringify(dadosTeste));
  
  try {
    Logger.log('2. Tentando rastrear conversão...');
    rastrearConversao(dadosTeste);
    Logger.log('✓ Conversão rastreada com sucesso');
  } catch(e) {
    Logger.log('✗ ERRO ao rastrear: ' + e.message);
  }
  
  try {
    Logger.log('3. Tentando registrar venda na sheet...');
    registrarVenda(dadosTeste);
    Logger.log('✓ Venda registrada com sucesso');
  } catch(e) {
    Logger.log('✗ ERRO ao registrar: ' + e.message);
  }
  
  Logger.log('4. Verificando sheet...');
  const sheet = SpreadsheetApp.openById(CONFIG.SHEET_ID).getSheetByName('Vendas');
  if (sheet) {
    const linhas = sheet.getLastRow();
    Logger.log('✓ Sheet "Vendas" existe com ' + linhas + ' linhas');
  } else {
    Logger.log('✗ Sheet "Vendas" não encontrada');
  }
  
  Logger.log('========== TESTE FINALIZADO ==========');
}

/**
 * Teste com dados estruturados como o Infinity Pay realmente manda
 * (baseado em documentação deles)
 */
function testarWebhookComDadosReais() {
  Logger.log('========== TESTE COM DADOS "REAIS" DO INFINITY PAY ==========');
  
  const dadosReais = {
    // Webhook real do Infinity Pay tem ESTA estrutura
    event: 'payment.completed',
    data: {
      id: 'evt_123456789',
      created_at: new Date().toISOString(),
      type: 'payment.completed',
      resource: {
        id: 'pmt_123456789',
        object: 'payment',
        status: 'completed',
        amount: 5000,
        currency: 'BRL',
        description: 'Página Absurda',
        metadata: {
          order_id: 'ORDER-' + Date.now(),
          customer_email: 'customer@example.com'
        },
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      }
    }
  };
  
  Logger.log('Estrutura recebida: ' + JSON.stringify(dadosReais));
  
  // PROBLEMA: A estrutura real pode ser diferente!
  if (!dadosReais.data?.resource?.id) {
    Logger.log('⚠️ AVISO: Estrutura de dados pode estar diferente!');
  }
}
