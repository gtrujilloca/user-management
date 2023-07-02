const casual = require("casual");
const crypto = require("crypto");
require("dotenv").config();

const pictureBaseUrl = process.env.IMAGES_URL;

const mockAdminUser = {
  email: "john.doe@mail.com",
  password: "123456",
  role: "admin",
};

const mockMemberUser = {
  email: "jason.doe@mail.com",
  password: "123456",
  role: "member",
};

module.exports.mockLoginUsers = {
  "john.doe@mail.com": mockAdminUser,
  "jason.doe@mail.com": mockMemberUser,
};

const createRandomUser = () => ({
  uid: crypto.randomUUID(),
  fullName: casual.full_name,
  email: casual.email,
  avatar: `${pictureBaseUrl}/${casual.name}.png`,
  accessStatus: true,
  role: "member",
  lastLogin: casual.date(format = 'YYYY-MM-DD'),
});

module.exports.generateListUsers = (usersNum = 10) => {
  const listUsers = [];

  for (let i = 0; i < usersNum; i++) {
    listUsers.push(createRandomUser());
  }

  return listUsers;
};