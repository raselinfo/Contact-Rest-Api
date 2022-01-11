class DataBase {
    constructor(collection) {
        this.items = collection
    }
    getAllItems() {
        return this.items
    }
    getItemById(id) {
        return this.items.find(item => item.id === id)
    }
    createItem(item) {
        item.id = this.items.length + 1
        if (item.name || item.email || item.phone) {
            this.items.push(item)
            return item
        }
        return false
    }
    updateItem(id, item) {
        let index = this.items.findIndex(item => item.id === id)
        this.items[index].name = item.name || this.items[index].name
        this.items[index].email = item.email || this.items[index].email
        this.items[index].phone = item.phone || this.items[index].phone
        return this.items[index]
    }
    deleteItem(id) {
        let deletedItem = this.items.find(item => item.id === id)
        this.items = this.items.filter(item => item.id !== id)
        return deletedItem
    }
    deleteAllItem() {
        this.items = []

        if (this.item === []) {
            return true
        }
    }
}

module.exports = { DataBase }