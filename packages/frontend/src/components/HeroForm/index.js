import { Field, Form, Formik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as heroesActionCreators from './../../actions/heroesActionsCreators';

function HeroForm () {
  const dispatch = useDispatch();

  const { createHero } = bindActionCreators(heroesActionCreators, dispatch);

  return (
    <Formik
      initialValues={{
        nickname: '',
        realName: '',
        originDescription: '',
        catchPhrase: ''
        // superpowers: '',
      }}
      onSubmit={values => {
        createHero(values);
      }}
    >
      {formik => (
        <Form>
          <Field name="nickname" />
          <Field name="realName" />
          <Field name="originDescription" />
          <Field name="catchPhrase" />
          {/* <Field name="superpowers" /> */}
          <button type="submit">Create superhero</button>
        </Form>
      )}
    </Formik>
  );
}

export default HeroForm;
