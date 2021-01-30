import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { createTask } from '../../actions/todoActionCreators';

const TaskForm = props => {
  // eslint-disable-next-line react/prop-types
  const { createTaskCb } = props;

  return (
    <Formik
      initialValues={{
        data: 'New Task ',
        isDone: false
      }}
      onSubmit={values => createTaskCb(values)}
    >
      {formik => (
        <Form>
          <Field name="data" />
          <button type="submit">Create task</button>
          <button type="reset">Reset</button>
        </Form>
      )}
    </Formik>
  );
};

TaskForm.propTypes = {
  props: PropTypes
};

const mapDispatchToProps = dispatch => ({
  createTaskCb: values => {
    dispatch(createTask(values));
  }
});

export default connect(null, mapDispatchToProps)(TaskForm);
