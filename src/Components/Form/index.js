import React from 'react';
import { withRouter } from 'react-router-dom';
import EditUserForm from "./EditUserForm";
import { navigationLinks} from "../../const";
import './form.css'

const Form = ({ location, history }) => {
  const { isEdit } = location.state || {};
  const goToTable = () => {
    history.push(navigationLinks.userTable.href)
  }
  return (
    <>
      <div className="header_text">{isEdit ? 'Edit': 'Create'} User Form</div>
      <div className="form-container">
        <EditUserForm isEdit={isEdit} goToTable={goToTable} />
      </div>
    </>
  )
};

export default withRouter(Form)