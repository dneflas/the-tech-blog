const casual = require("casual");
const { User } = require("../models");

const userSeedData = [
  {
    username: casual.username,
    email: casual.email,
    password: casual.password,
  },
  {
    username: casual.username,
    email: casual.email,
    password: casual.password,
  },
  {
    username: casual.username,
    email: casual.email,
    password: casual.password,
  },
  {
    username: casual.username,
    email: casual.email,
    password: casual.password,
  },
  {
    username: casual.username,
    email: casual.email,
    password: casual.password,
  },
];

User.bulkCreate(userSeedData, { individualHooks: true });
