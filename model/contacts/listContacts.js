const { Contact } = require('../../db')

const listContacts = async (owner, page, limit, favorite) => {
  //* If you add favorites to the request, then will sort
  if (favorite) {
    return await Contact.paginate(Contact.find({ owner, favorite }), {
      page,
      limit,
    })
  }

  return await Contact.paginate(Contact.find({ owner }), { page, limit })
}

module.exports = listContacts
