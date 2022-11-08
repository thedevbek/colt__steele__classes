let input = prompt('What would you like to do?')
const todos = ['Read', 'Java'];
while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('*************')
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('*************')
    } else if (input === 'new') {
        const newTodo = prompt('Please, enter new To Do...');
        todos.push(newTodo);
        console.log(`${newTodo} added to the list...`);
    } else if (input === 'delete') {
        const index = parseInt(prompt(`Enter an index to delete: `));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`You have deleted ${deleted[0]}`);
        } else {
            console.log(`Unknown index!`)
        }

    }
    input = prompt('What would you like to do?')
}
console.log('Okay, Bye!');
