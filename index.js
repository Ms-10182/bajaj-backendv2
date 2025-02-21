import { app } from "./app.js";
import 'dotenv/config'

app.on("error", (error) => {
    console.log("error on start the app: ", error);
    throw err;
  });
  app.listen(process.env.PORT, () => {
    console.log("server started at port ", process.env.PORT);
  });