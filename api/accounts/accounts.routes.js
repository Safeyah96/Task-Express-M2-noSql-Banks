const express = require("express");
const {
  getAllAccounts,
  createAccount,
  getOneAccount,
  deleteOneAccount,
  updateAcount,
} = require("./accounts.controller");
const accountRouter = express.Router();

accountRouter.get("/accounts", getAllAccounts);

accountRouter.post("/create", createAccount);

accountRouter.get("/delete", getOneAccount);

accountRouter.delete("/account/:id", deleteOneAccount);

accountRouter.put("/account/:id", updateAcount);

module.exports = accountRouter;
