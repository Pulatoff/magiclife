const CheckPerformTransaction = async (req, res, next) => {};
const CreateTransaction = async (req, res, next) => {};
const PerformTransaction = async (req, res, next) => {};
const CancelTransaction = async (req, res, next) => {};
const CheckTransaction = async (req, res, next) => {};
const GetStatement = async (req, res, next) => {};

exports.handler = async (req, res, next) => {
  const { method } = req.body;
  switch (method) {
    case "CheckPerformTransaction":
      CheckPerformTransaction(req, res, next);
      break;
    case "CreateTransaction":
      CreateTransaction(req, res, next);
      break;

    case "PerformTransaction":
      PerformTransaction(req, res, next);
      break;

    case "CancelTransaction":
      CancelTransaction(req, res, next);
      break;

    case "CheckTransaction":
      CheckTransaction(req, res, next);
      break;

    default:
      GetStatement;
      break;
  }
};
