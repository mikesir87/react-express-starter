import express from "express";
import router from "./router";

const app = express();
app.use(express.static("/app/build"));

app.use("/api", router);

app.listen(3000, () => console.log("App listening on port 3000"));