# Signal Captchas

Used to display a CAPTCHA inside a forked [Signal-Android
app](https://github.com/JJTofflemire/Signal-Android).

**Hosted at <https://eyedropper.app/signalcaptchas/>**

## Steps

- Start from the [HCaptcha "Getting Started" docs](https://docs.hcaptcha.com/configuration)
- Swap the HCaptcha sitekey for our own sitekey (publicly visible/safe to commit)
- Scrape Signal's official hosted UI: <https://signalcaptchas.org/registration/generate.html>.
- Re-use the existing Signal-Android's custom protocol handler (`signalcaptcha://`)
- Host in S3 bucket

## TODO

- [ ] Host this file on NGINX/somewhere on `https://chat.middleman.foo`
