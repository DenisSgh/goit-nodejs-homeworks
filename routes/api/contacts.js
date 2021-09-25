const express = require("express");
const router = express.Router();
const {
  listContacts,
  getContactById,
  addContact,
  // updateContactById,
  removeContact,
} = require("../../model/contacts/index");

router.get("/", async (req, res, next) => {
  try {
    const contacts = await listContacts();

    res.status(200).json({
      status: "success",
      code: 200,
      data: {
        contacts,
      },
    });
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const contact = await getContactById(id);

    if (!contact) {
      throw new Error("Not found 404");
    }

    res.status(200).json({
      status: "success",
      code: 200,
      data: {
        contact,
      },
    });
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const contact = await addContact(req.body);

    if (!contact) {
      throw new Error("400 missing required name field");
    }

    res.status(201).json({
      status: "created",
      code: 201,
      data: {
        contact,
      },
    });
  } catch (error) {
    next(error);
  }
});

router.patch("/:id", async (req, res, next) => {
  res.json({ message: "template message" });
});

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const contact = await removeContact(id);
    console.log(contact);

    if (!contact) {
      throw new Error("Not found 404");
    }

    res.status(200).json({
      status: "success",
      code: 200,
      message: "contact deleted",
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
