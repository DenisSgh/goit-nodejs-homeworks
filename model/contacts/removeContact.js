const listContacts = require("./listContacts");
const updateContacts = require("./updateContacts");

async function removeContact(contactId) {
  const contacts = await listContacts();
  const idx = contacts.findIndex((contact) => contact.id === +contactId);

  if (idx === -1) return null;

  const newContacts = contacts.filter((contact) => contact.id != +contactId);
  console.log(newContacts);
  await updateContacts(newContacts);

  return true;
}

module.exports = removeContact;
