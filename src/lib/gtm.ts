/**
 * Helper para rastrear eventos com Google Tag Manager
 */
export const trackEvent = (eventName: string, eventData?: Record<string, any>) => {
  if (window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...eventData
    });
    console.log(`📊 Evento rastreado no GTM: ${eventName}`, eventData);
  } else {
    console.warn('⚠️ dataLayer não encontrado. Verifique se o GTM está instalado corretamente.');
  }
};

/**
 * Rastrear cliques em CTAs
 */
export const trackCTAClick = (location: string) => {
  trackEvent('cta_click', { location });
};

/**
 * Rastrear visualização de seção
 */
export const trackSectionView = (sectionName: string) => {
  trackEvent('section_view', { section: sectionName });
};

/**
 * Rastrear compra/conversão
 */
export const trackPurchase = (transactionId: string, value: number, currency: string = 'BRL') => {
  trackEvent('purchase', {
    transaction_id: transactionId,
    value: value,
    currency: currency
  });
};
