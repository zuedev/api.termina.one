import express from "express";
import cors from "cors";

const api = express();

api.use(
  cors({
    origin: "*",
  })
);

api.get("/", (request, response) => {
  response.json({ message: "Hello, World! :3" });
});

api.get("/teleport/:key", (request, response) => {
  const { key } = request.params;

  const keys = {
    t1: "https://termina.one",
    t1_stripe: "https://termina.one/stripe",
    t1_chatwoot: "https://termina.one/chatwoot",
  };

  const url = keys[key];

  if (!url) return response.status(404).json({ message: "Not found" });

  response.status(200).json({ url });
});

api.listen(3000, () => {
  console.log("Server is running on port 3000");
});
