function onDataCallback(token) {
  console.log('Successful response')

  // const action = document.location.href.indexOf('challenge') !== -1 ?
  //   'challenge' : 'registration'

  const sitekey = 'c866ff6f-e3f6-4e9c-936e-73d268ec33d5'
  const action = 'registration' // HCaptcha goes with "registration"
  console.log({ sitekey, action, token })

  renderCallback('signal-hcaptcha', sitekey, action, token)
}

function redirect(solution) {
  var targetURL = 'signalcaptcha://' + solution
  var link = document.createElement('a')
  link.href = targetURL
  link.innerText = 'Open Signal'

  document.body.removeAttribute('class')

  setTimeout(function () {
    document.getElementById('container').appendChild(link)
  }, 2000)

  window.location.href = targetURL
}

function renderCallback(scheme, sitekey, action, token) {
  var fullSolution = [scheme, sitekey, action, token].join('.')
  if (fullSolution.length >= 2000 && window.navigator.userAgent && window.navigator.userAgent.toLowerCase().includes("windows")) {
    throw new Error(`solution is too long, but we don't have a fallback for windows yet.`)
    // fetch('/shortener', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'text/plain' },
    //   body: token
    // })
    //   .then(response => {
    //     if (response.status !== 200) {
    //       throw new Error('Shortening request failed with ' + response.status)
    //     }
    //     return response.text()
    //   })
    //   .then(shortCode => redirect([scheme + '-short', sitekey, action, shortCode].join(".")), _error => redirect(fullSolution))
  } else {
    redirect(fullSolution)
  }
}

const localeData = { "af-ZA": { "open-signal": "Maak Signal oop" }, "ar": { "open-signal": "يُرجى فتح Signal" }, "az-AZ": { "open-signal": "Signal-ı açın" }, "bg-BG": { "open-signal": "Отворете Signal" }, "bn-BD": { "open-signal": "Signal খুলুন" }, "bs-BA": { "open-signal": "Otvori Signal" }, "ca": { "open-signal": "Obrir Signal" }, "cs": { "open-signal": "Otevřít Signal" }, "da": { "open-signal": "Åbn Signal" }, "de": { "open-signal": "Signal öffnen" }, "el": { "open-signal": "Άνοιγμα Signal" }, "en": { "open-signal": "Open Signal" }, "es": { "open-signal": "Abrir Signal" }, "et-EE": { "open-signal": "Ava Signal" }, "eu": { "open-signal": "Ireki Signal" }, "fa-IR": { "open-signal": "باز کردن سیگنال" }, "fi": { "open-signal": "Avaa Signal" }, "fr": { "open-signal": "Ouvrez Signal" }, "ga-IE": { "open-signal": "Oscail Signal" }, "gl-ES": { "open-signal": "Abrir Signal" }, "gu-IN": { "open-signal": "Signal ઓપન કરો" }, "he": { "open-signal": "פתיחת Signal" }, "hi-IN": { "open-signal": "Signal खोलें" }, "hr-HR": { "open-signal": "Otvori Signal" }, "hu": { "open-signal": "Signal megnyitása" }, "id": { "open-signal": "Buka Signal" }, "it": { "open-signal": "Apri Signal" }, "ja": { "open-signal": "Signalを開きます" }, "ka-GE": { "open-signal": "Signal-ის გახსნა" }, "kk-KZ": { "open-signal": "Signal-ды ашу" }, "km-KH": { "open-signal": "បើក Signal" }, "kn-IN": { "open-signal": "Signal ತೆರೆಯಿರಿ" }, "ko": { "open-signal": "Signal 열기" }, "ky-KG": { "open-signal": "Signal'ды ачуу" }, "lt-LT": { "open-signal": "Atidaryti „Signal“" }, "lv-LV": { "open-signal": "Atvērt Signal" }, "mk-MK": { "open-signal": "Отворете го Signal" }, "ml-IN": { "open-signal": "Signal തുറക്കുക" }, "mr-IN": { "open-signal": "Signal उघडा" }, "ms": { "open-signal": "Buka Signal" }, "my": { "open-signal": "Signal ကို ဖွင့်ရန်" }, "nb": { "open-signal": "Åpne Signal" }, "nl": { "open-signal": "Signal openen" }, "pa-IN": { "open-signal": "Signal ਖੋਲ੍ਹੋ" }, "pl": { "open-signal": "Otwórz Signal" }, "pt-BR": { "open-signal": "Abrir o Signal" }, "pt-PT": { "open-signal": "Abrir Signal" }, "ro-RO": { "open-signal": "Deschide Signal" }, "ru": { "open-signal": "Открыть Signal" }, "sk-SK": { "open-signal": "Otvoriť Signal" }, "sl-SI": { "open-signal": "Odpri Signal" }, "sq-AL": { "open-signal": "Hap Signal" }, "sr-RS": { "open-signal": "Отвори Signal" }, "sr-YR": { "open-signal": "Отвори Signal" }, "sv": { "open-signal": "Öppna Signal" }, "sw": { "open-signal": "Fungua Signal" }, "ta-IN": { "open-signal": "சிக்னலைத் திறக்கவும்" }, "te-IN": { "open-signal": "Signal ను తెరవండి" }, "th": { "open-signal": "เปิด Signal" }, "tl-PH": { "open-signal": "Buksan ang Signal" }, "tr": { "open-signal": "Signal'ı aç" }, "uk-UA": { "open-signal": "Відкрити Signal" }, "ur": { "open-signal": "Signal کھولیں" }, "vi": { "open-signal": "Mở Signal" }, "zh-CN": { "open-signal": "打开 Signal" }, "zh-HK": { "open-signal": "開啟 Signal" }, "zh-TW": { "open-signal": "開啟 Signal" } }
