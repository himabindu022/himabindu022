const tasks = {
    tasks: [{
        text: 'Grocery',
        completed: false
    }, {
        text: 'Dishes',
        completed: true
    },
    {
        text: 'Laundry',
        completed: false
    }],
    getTasksToDo() {
        return this.tasks.filter((each) => each.completed === false)
    }
}

console.log(tasks.getTasksToDo())

