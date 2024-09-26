const express = require("express");
const accountRouter = require("./api/accounts/accounts.routes");
const PORT = 8000;
const app = express();

app.use(express.json());
app.use("/api", accountRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
