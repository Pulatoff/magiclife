const Transaction = require("../models/TransactionModel");

exports.openKassa = (req, res, next) => {
  res.render("kassa");
};

exports.onenPayme = async (req, res, next) => {
  const { amount } = req.body;
  console.log(req.body);
  const merchant_id = process.env.PAYME_ID;
  console.log(amount);
  //const account = (await Transaction.findOne().sort({ order_id: 1 })) || 5000;
  const data = await Transaction.create({ amount, account: 1 });
  res.status(200).render("payme", { data, merchant_id });
};
