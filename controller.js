const getMessage = require('./service').getMessage;
const getsession = require('./service').getsession;

exports.ask = (req, res, next) => {
    console.log(req.body);
  return getMessage(req.body)
    .then(output => {
      res.status(200);
      res.send(output);
    })
    .catch(next);
};

exports.ses = (req, res, next) => {
  console.log(req.body);
return getsession(req.body)
  .then(output => {
    res.status(200);
    res.send(output);
  })
  .catch(next);
};