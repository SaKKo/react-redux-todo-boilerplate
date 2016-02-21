import React from 'react';
import { Provider } from 'react-redux';

import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import Footer from '../components/Footer';
import configureStore from '../store/configureStore';

const TodoApp = () => (
  <div>
    <AddTodo />
    <TodoList />
    <Footer />
  </div>
);

export default TodoApp;
