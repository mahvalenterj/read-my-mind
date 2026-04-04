function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.openById('1yFpgQSxnjHd3LMlImTe-sfEkaNQe-B8Ge2wnjQpYo_4')
                                .getSheetByName('Leads');

    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Data/Hora', 'Nome', 'WhatsApp', 'Segmento',
        'UTM Source', 'UTM Medium', 'UTM Campaign',
        'UTM Term', 'UTM Content'
      ]);
    }

    sheet.appendRow([
      data.data_hora,
      data.nome,
      data.whatsapp,
      data.segmento,
      data.utm_source,
      data.utm_medium,
      data.utm_campaign,
      data.utm_term,
      data.utm_content,
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch(err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}