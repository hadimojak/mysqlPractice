const sequelize = require("./util/database");

// models
const User = require("./models/user");

// sequelize.sync().then(async (result) => {
//   await User.create({ firstName: "hadi", lastName: "abbas" });
// });

// User.findAll().then((users) => {
//   console.log(JSON.stringify(users,null,2));
// });

//projection
User.findAll({
  attributes: {
    include: [
      [sequelize.fn("COUNT", sequelize.col("firstName")), "n_firstName"],
    ],
  },
}).then((numbers) => console.log(JSON.stringify(numbers, null, 2)));
