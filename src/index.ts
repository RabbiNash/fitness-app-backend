import app from "./app";
import swaggerDocs from "./helpers/swaggerDocs";

const PORT: number = 4000;
app.listen(PORT, () => {
  console.log(`Server running on port : ${PORT}`);
  swaggerDocs(app, PORT);
});
export default app;
