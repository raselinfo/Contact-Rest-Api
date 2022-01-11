const { contacts } = require("../Model/contacts.model")
const { DataBase } = require("../Model/schema")
const contactsData = new DataBase(contacts)

exports.getAllContact = (req, res) => {
    let allContacts = contactsData.getAllItems()
    if (allContacts) { res.status(200).json(allContacts) }
    else { res.status(400).json({ message: "Data Not Found" }) }
}
exports.createContact = (req, res) => {
    const data = req.body
    let newContact = contactsData.createItem(data)
    if (newContact) {
        res.status(200).json(newContact)
    } else { res.status(404).json({ message: "404 not found" }) }
}

exports.getContactById = (req, res) => {
    const id = Number(req.params.id)
    let contact = contactsData.getItemById(id)
    if (contact) { res.status(200).json(contact) }
    else { res.status(404).json({ message: `Data not found for id : ${id}` })}
}
exports.updateContact = (req, res) => {
    const id = Number(req.params.id)
    const data = req.body
    let contact = contactsData.updateItem(id, data)
    res.status(200).json(contact)
}
exports.deleteContact = (req, res) => {
    const id = Number(req.params.id)
    let deletedContact = contactsData.deleteItem(id)
    res.status(200).json({...deletedContact,message:true})
}
exports.deleteAllContact=(req,res)=>{
    let message=contactsData.deleteAllItem()
    res.status(200).json({message})
}