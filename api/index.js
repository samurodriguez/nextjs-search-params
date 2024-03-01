const express = require("express");

const app = express();

const PORT = 8080;

app.get("/test", async (req, res) => {
  const { data } = req.query;

  await new Promise((resolve) => setTimeout(resolve, 2000));

  res.send(data);
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
