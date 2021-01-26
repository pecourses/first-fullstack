import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

function TasksListItem(props) {
  const {task: t} = props;

  return (
    <li key={t.id}>
      {t.data}
      <input type="checkbox" checked={t.isDone} />
    </li>
  );
}

const TasksList = props => {
  const {tasks, isFetching, error} = props;
  return (
    <ul>
      {tasks.map(t => (
        <TasksListItem task={t} />
      ))}
    </ul>
  );
};

TasksList.propTypes = {
  props: PropTypes,
};

const mapStateToProps = state => state.todo;

// const mapDispatchToProps = {

// }

export default connect(mapStateToProps)(TasksList);
