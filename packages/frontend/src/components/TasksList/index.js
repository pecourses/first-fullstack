/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function TasksListItem (props) {
  // eslint-disable-next-line react/prop-types
  const { task: t } = props;

  return (
    <li key={t.id}>
      {t.data}
      <input type="checkbox" checked={t.isDone}/>
        <button>Remove task</button>
    </li>
  );
}

const TasksList = props => {
  // eslint-disable-next-line react/prop-types
  const { tasks } = props;
  return (
    <ul>
      {tasks.map(t => (
        // eslint-disable-next-line react/jsx-key
        <TasksListItem task={t} />
      ))}
    </ul>
  );
};

TasksList.propTypes = {
  props: PropTypes
};

const mapStateToProps = state => state.todo;

// const mapDispatchToProps = {

// }

export default connect(mapStateToProps)(TasksList);
