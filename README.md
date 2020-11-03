# Slow responding web server for NEL "abandonment" purposes

## Article explaining our effort

[Server responses so slow the user abandoned](https://medium.com/@PeterPerlepes/server-responses-so-slow-the-user-abandoned-trace-using-nel-and-an-example-in-node-js-b83cf5719499)

## Set up

Clone the repo & start the server

```bash
> git clone ...
> npm install
> npm run dev
```

In another shell

```
> ngrok http 4000
```

Retrieve the secure URL provided by _ngrok_ and replace the `NGROK_URL` at the [NEL middleware](./middleware/nel.js#L8) implementation.

You are good to go, trigger some abandonments 🔫
