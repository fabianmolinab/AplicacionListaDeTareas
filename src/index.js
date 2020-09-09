import './styles.css';

import { Todo, TodoList } from './classes/index.js';
import { crearTodoHtml } from './js/componentes.js';

export const todoList = new TodoList();

const tarea = new Todo('');

todoList.nuevoTodo(tarea);


crearTodoHtml(tarea);