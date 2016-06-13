import { autorun, observable } from 'mobx'

export default function TodoListController(dataStore) {
    // initialize component
    this.$onInit = function() {
            this.todos = dataStore
            initNewItem()
            autorun(() => {
                this.itemsCount = this.todos.items.length
                this.unfinishedTasks = this.todos.items.filter(task => !task.finished)
                this.finishedTasks = this.todos.items.filter(task => task.finished)
            })
        }
        // private
    let initNewItem = () => {
            this.newItem = observable({
                name: '',
                finished: false,
                itemClass() {
                    return this.finished ? 'done' : ''
                }
            })
        }
        // public
    this.addItem = function(item) {
        this.todos.items.push(item)
        initNewItem()
    }
    this.deleteItem = function(item) {
        this.todos.items.remove(item)
    }
    this.setTitle = function(text) {
        this.todos.title = text
    }
    this.archive = function() {
        let unarchived = this.todos.items.filter((item) => {
            return !item.finished
        })
        this.todos.items.replace(unarchived)
    }
}
