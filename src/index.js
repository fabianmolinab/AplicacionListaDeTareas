import './styles.css';

import { Todo, TodoList } from './classes/index.js';
import { crearTodoHtml } from './js/componentes.js';

export const todoList = new TodoList();

const tarea = new Todo('Fabian es bonito');

todoList.nuevoTodo(tarea);

console.log(todoList);

crearTodoHtml(tarea);