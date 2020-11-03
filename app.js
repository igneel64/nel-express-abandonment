const express = require("express");
const app = express();
const PORT = 4000;
const NelMiddleware = require("./middleware/nel");

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

app.use(NelMiddleware);
app.use(express.json({ type: "application/reports+json" }));

app.get("/", async (req, res) => {
  res.setHeader("Content-Type", "text/html");
  await res.write(`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
      </head>
    <body>`);

  await delay(3000);

  res.write(`<p>Hello World</p></body>`);

  await delay(3000);

  res.write(`</html>`);

  res.end();
});

app.post("/report", (req, res) => {
  console.log(JSON.stringify(req.body));
});

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
