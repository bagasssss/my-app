import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import { v4 as uuidv4 } from 'uuid';
import {useDispatch} from "react-redux";
import { addUser, editUserSuccess} from "../../../store/confogureStore";
import { validate } from './validators'

const renderTextField = ({
                           label,
                           input,
                           meta: { touched, invalid, error },
                           ...custom
                         }) => (
  <TextField
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
  />
)


const radioButton = ({ input, ...rest }) => (
  <FormControl>
    <RadioGroup {...input} {...rest}>
      <FormControlLabel value="female" control={<Radio />} label="Female" />
      <FormControlLabel value="male" control={<Radio />} label="Male" />
    </RadioGroup>
  </FormControl>
)


let EditUserForm = (props) => {
  const { handleSubmit, pristine, reset, submitting, isEdit, goToTable } = props
  const dispatch = useDispatch();

  const submit = (values) => {
    if (isEdit) {
      dispatch(editUserSuccess(values))
    } else {
      const newUserObj = {
        ...values,
        id: uuidv4()
      };
      dispatch(addUser(newUserObj));
    }
    goToTable();
  }
  return (
    <form onSubmit={handleSubmit(submit)}>
      <div>
        <Field
          name="name"
          component={renderTextField}
          label="First Name"
        />
      </div>
      <div>
        <Field name="email" component={renderTextField} label="Email" />
      </div>
      <div>
        <Field name="gender" component={radioButton}>
          <Radio value="male" label="male" />
          <Radio value="female" label="female" />
        </Field>
      </div>
      <div>
        <Field name="status" component={renderTextField} label="Status" />
      </div>

      <div>
        <button type="submit" disabled={pristine || submitting}>
          {isEdit ? 'Update' : 'Submit'}
        </button>
        <button type="button" onClick={reset}>
          {isEdit ? 'Undo' : 'Clear Values'}
        </button>
      </div>
    </form>
  )
}

EditUserForm = reduxForm({
  form: 'initializeFromState',
  validate
})(EditUserForm)

EditUserForm = connect(
  state => ({
    initialValues: state.users.dataForEditing
  }),
)(EditUserForm)

export default EditUserForm