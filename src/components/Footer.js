import React from 'react';
import { connect } from 'react-redux';

import { setVisibilityFilter } from '../actions/actions';
import { SHOW_ALL,SHOW_ACTIVE,SHOW_COMPLETED } from '../constants/ActionTypes';
import Link from './Link';

const mapStateProps = (
  state,
  ownProps
) => {
  return {
    active:
      ownProps.filter ===
      state.visibilityFilter
  };
};
const mapDispatchProps = (
  dispatch,
  ownProps
) => {
  return {
    onClick: () => {
      dispatch(
        setVisibilityFilter(ownProps.filter)
      );
    }
  };
};

const FilterLink = connect(
  mapStateProps,
  mapDispatchProps
)(Link);

const Footer = () => (
  <p>
    Show:
    {' '}
    <FilterLink filter={SHOW_ALL}>
      All
    </FilterLink>
    {', '}
    <FilterLink filter={SHOW_ACTIVE}>
      Active
    </FilterLink>
    {', '}
    <FilterLink filter={SHOW_COMPLETED}>
      Completed
    </FilterLink>
  </p>
);

export default Footer;
