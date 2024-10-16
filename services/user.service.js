const db = require("../db");

module.exports.addUser = async (requestData) => {
  console.log(requestData);
  const response = await db.query(
    "INSERT INTO users (`name`,`email`) VALUES (?,?)",
    [requestData.name, requestData.email]
  );
  console.log(response);
};

module.exports.getUsers = async () => {
  const [response] = await db.query("SELECT * FROM users");
  console.log(response);
  return response;
};
