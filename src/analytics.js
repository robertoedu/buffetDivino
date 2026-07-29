const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim()

function hasValidMeasurementId() {
  return /^G-[A-Z0-9]+$/i.test(measurementId || '')
}

export function initializeGoogleAnalytics() {
  if (
    typeof window === 'undefined' ||
    !hasValidMeasurementId() ||
    window.gtag
  ) {
    return
  }

  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag() {
    window.dataLayer.push(arguments)
  }

  window.gtag('js', new Date())
  window.gtag('config', measurementId, {
    send_page_view: true,
  })

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(
    measurementId,
  )}`
  document.head.appendChild(script)
}

export function trackWhatsappClick(buttonLocation) {
  if (
    typeof window === 'undefined' ||
    !hasValidMeasurementId() ||
    typeof window.gtag !== 'function'
  ) {
    return
  }

  window.gtag('event', 'whatsapp_click', {
    button_location: buttonLocation,
    transport_type: 'beacon',
  })
}
