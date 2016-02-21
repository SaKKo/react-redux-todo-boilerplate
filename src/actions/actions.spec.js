import chai, {expect} from 'chai';
import { addTodo } from './actions';
import {ADD_TODO,TOGGLE_TODO,SET_VISIBILITY_FILTER} from '../constants/ActionTypes';

describe('addTodo', () => {
  it('add 1st todo', () => {
    expect(addTodo('hello1')).to.deep.equal({
      type: ADD_TODO,
      id: 0,
      text: 'hello1'
    });
  });
  it('add 2nd todo', () => {
    expect(addTodo('hello2')).to.deep.equal({
      type: ADD_TODO,
      id: 1,
      text: 'hello2'
    });
  });
});
describe('toggleTodo', () => {
  it('', () => {
  });
});
describe('setVisibilityFilter', () => {
  it('', () => {
  });
});
