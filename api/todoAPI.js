class TodoAPI {
    constructor() {
        this.todos = [];
    }

    add(task) {
        if (!task || task.trim() === "") return "Task cannot be empty";
        const newTodo = { id: Date.now(), task, completed: false };
        this.todos.push(newTodo);
        return this.todos;
    }

    update(id, newTask) {
        const todo = this.todos.find(item => item.id === id);
        if (!todo) return "Task not found";

        todo.task = newTask;
        return this.todos;
    }

    delete(id) {
        const index = this.todos.findIndex(item => item.id === id);
        if (index === -1) return "Task not found";

        this.todos.splice(index, 1);
        return this.todos;
    }

    toggleCompleted(id) {
        const todo = this.todos.find(item => item.id === id); // fixed
        if (!todo) return "Task not found";

        todo.completed = !todo.completed;
        return this.todos;
    }

    getAll() {
        return this.todos;
    }
}

export default TodoAPI;
