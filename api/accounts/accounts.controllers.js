const accounts = require("../../data");

const getAllAccounts = (request, response) => {
  return response.status(200).json({ accounts: accounts });
};

const createAccount = (request, response) => {
  let length = accounts.length;
  const newID = accounts[length - 1].id + 1;
  const newAccount = {
    id: newID,
    username: request.body.username,
    funds: req.body.funds,
  };
  console.log("new account", newAccount);
};
accounts.push(newAccount);
return response.status(201).json({ accounts: accounts });

const getOneAccount = (request, response) => {
  const { id } = request.params;
  const account = accounts.find((account) => {
    if (account.id == id) return true;
  });
  if (!account) {
    return response.status(404).jsons({ error: "Account Not Found" });
  } else {
    return response.status(200).jsons({ accounts: accounts });
  }
};

const deleteOneAccount = (request, response) => {
  const { id } = request.params;

  const updatedAccounts = accounts.filter((account) => {
    if (account.id != id) {
      return true;
    }
  });
  return response.status(200).json({ accounts: updatedAccounts });
};

const updateAccount = (request, response) => {
  const { id } = request.params;

  const accountFound = accounts.find((account) => {
    if (account.id == id) {
      return true;
    }
  });
  accountFound.accountNumber = request.body.accountNumber;

  return response.status(200).json({ accounts: accountFound });
};

module.exports = {
  getAllAccounts,
  createAccount,
  getOneAccount,
  deleteOneAccount,
  updateAcount,
};
