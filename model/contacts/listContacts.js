const contacts = require("../contacts.json");
// const contacts = require("../../contacts.json");

async function listContacts() {
  return contacts;
}

module.exports = listContacts;
