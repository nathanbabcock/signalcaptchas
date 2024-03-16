# Signal Captchas

- Used to display a CAPTCHA inside a forked [Signal-Android
app](https://github.com/jtof-dev/Signal-Android)

- If you are looking to implement this for your Signal-Server / Signal-Android, check out [the nginx-certbot docker container](https://github.com/jtof-dev/Signal-Docker/tree/main/nginx-certbot) which includes configuration for this

**Hosted at <https://eyedropper.app/signalcaptchas/>**

## Steps

- Start from the [HCaptcha "Getting Started" docs](https://docs.hcaptcha.com/configuration)

- Swap the HCaptcha sitekey for our own sitekey (publicly visible/safe to commit)

- Scrape Signal's official hosted UI: <https://signalcaptchas.org/registration/generate.html>.

- Re-use the existing Signal-Android's custom protocol handler (`signalcaptcha://`)

- Host in S3 bucket, or add some [nginx](https://github.com/jtof-dev/Signal-Docker/tree/main/nginx-certbot) configuration to host on a domain with an extra `location` block

## Documentation

- Signal has a very robust captcha implementation because of traffic they get (check out `backup-from-signal`), but for a personal deployment we can simplify

- Signal splits traffic between HCaptcha and ReCaptcha, and includes which service was used in the redirect url using the word `registration` or `challenge` respectively

  - HCaptcha was the prompt we kept getting during testing, so we created our own and hardcoded `registration` into the redirect url

- Signal translates the text of the `Open Signal` button - currently it is hardcoded to `en`, but you can check out the full list on the first line of signalcaptcha's [`bundle.js`](backup-from-signalcaptchas/bundle.js)

- Signal uses a protocol that `Signal-Android` and `Signal-Server` can recognize (the `signalcaptcha://` from above), which we copied in directly

- Sometimes there are more than 2000 characters in the redirect url, prompting the website to send the code to another webpage (`https://signalcaptchas/shortener`), which shortens the url somehow (closed source website and probably only internally accessible), along with a `-short` at the end of the url

  - This appears to be an edge-case, and besides, we have no way of implementing this ourselves so just hope you don't run into it?

## To Do

- Make the web page prettier

  - Probably just entails making the background transparent / detecting light and dark mode, and centering the `hcaptcha`
  
- Implement the `shortener` (will never happen)