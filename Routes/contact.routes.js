const express = require("express")
const { getAllContact, createContact, getContactById, updateContact, deleteContact, deleteAllContact } = require("../Controller/contacts.controller")
const router = express.Router()

router.get("/", getAllContact)
router.get("/:id", getContactById)
router.post("/", createContact)
router.put("/:id", updateContact)
router.delete("/:id", deleteContact)
router.delete("/", deleteAllContact)
module.exports = { contactRouter: router }
