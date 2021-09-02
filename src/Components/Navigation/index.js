import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';
import { navigationLinks} from "../../const";
import './navigation.css';

const Navigation = ({ history }) => {
  const goToUserForm = () => {
    history.push(navigationLinks.userForm.href)
  };
  const goToTable = () => {
    history.push(navigationLinks.userTable.href)
  }

  return (
    <div >
      <AppBar position="static">
        <Toolbar variant="dense">
          <Button className="button" variant="contained" onClick={goToUserForm}>New user</Button>
          <Button className="button" variant="contained" onClick={goToTable}>View users</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(Navigation);