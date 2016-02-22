import React from 'react';
import { connect } from 'react-redux';

import Todo from './Todo';
import { toggleTodo } from '../actions/actions';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/ActionTypes';

const TodoList = ({
  todos,
  onTodoClick
  }) => (
  <ul>
    {todos.map(todo =>
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => onTodoClick(todo.id)}
          />
    )}
  </ul>
);

// just for filtering
const getVisibleTodos = (
  todos,
  filter
) => {
  switch (filter) {
    case SHOW_ALL:
      return todos;
    case SHOW_COMPLETED:
      return todos.filter(
          t => t.completed
      );
    case SHOW_ACTIVE:
      return todos.filter(
          t => !t.completed
      );
  }
};

// just to return visible todos as Props
const mapStateToProps = (
  state
) => {
  return {
    todos: getVisibleTodos(
      state.todos,
      state.visibilityFilter
    )
  };
};

// Used in react to dispatch Action
const mapDispatchToProps = (
  dispatch
) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id));
    }
  };
};

// merge everything and export
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
