import express from "express";
import { readUtils, readAll } from "./read.utils.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  const userColl = await readUtils();
  console.log(userColl);
  res.json(userColl);
});

app.get("/users", async (req, res) => {
  const userColl = await readAll();
  console.log(userColl);
  res.json(userColl);
});

app.listen(3000, () => console.log(`Example listening on port 3000`));
