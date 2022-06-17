const casual = require("casual");
const { User, Post, Comment } = require("../models");
const sequelize = require("../config/connection");

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

const postSeedData = [
  {
    title: casual.title,
    post_content: casual.text,
    user_id: 1,
  },
  {
    title: casual.title,
    post_content: casual.text,
    user_id: 1,
  },
  {
    title: casual.title,
    post_content: casual.text,
    user_id: 2,
  },
  {
    title: casual.title,
    post_content: casual.text,
    user_id: 2,
  },
  {
    title: casual.title,
    post_content: casual.text,
    user_id: 3,
  },
  {
    title: casual.title,
    post_content: casual.text,
    user_id: 3,
  },
  {
    title: casual.title,
    post_content: casual.text,
    user_id: 4,
  },
  {
    title: casual.title,
    post_content: casual.text,
    user_id: 4,
  },
  {
    title: casual.title,
    post_content: casual.text,
    user_id: 4,
  },
];

const commentSeedData = [
  {
    comment_text: casual.text,
    user_id: 1,
    post_id: 1,
  },
  {
    comment_text: casual.text,
    user_id: 2,
    post_id: 2,
  },
  {
    comment_text: casual.text,
    user_id: 3,
    post_id: 3,
  },
  {
    comment_text: casual.text,
    user_id: 4,
    post_id: 4,
  },
  {
    comment_text: casual.text,
    user_id: 4,
    post_id: 5,
  },
  {
    comment_text: casual.text,
    user_id: 1,
    post_id: 6,
  },
  {
    comment_text: casual.text,
    user_id: 2,
    post_id: 7,
  },
  {
    comment_text: casual.text,
    user_id: 3,
    post_id: 8,
  },
  {
    comment_text: casual.text,
    user_id: 4,
    post_id: 9,
  },
  {
    comment_text: casual.text,
    user_id: 3,
    post_id: 1,
  },
];

const seedData = async () => {
  await sequelize.sync({ force: true });
  await User.bulkCreate(userSeedData, { individualHooks: true });
  await Post.bulkCreate(postSeedData);
  await Comment.bulkCreate(commentSeedData);
};

seedData();
