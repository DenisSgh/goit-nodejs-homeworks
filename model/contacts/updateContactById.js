const listContacts = require("./listContacts");
const updateContacts = require("./updateContacts");

async function updateContactById(contactId, body) {
  const contacts = await listContacts();
  const idx = contacts.findIndex((contact) => contact.id === +contactId);

  if (idx === -1) return null;
  contacts[idx] = { ...contacts[idx], ...body };
  updateContacts(contacts);

  return contacts[idx];
}

module.exports = updateContactById;
