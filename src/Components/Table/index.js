import React from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import { navigationLinks} from "../../const";
import './table.css';
import { editUser, removeUser } from "../../store/confogureStore";


const TableComponent = ({ history }) => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.userList)
  const deleteIconOnclickHandler = (e, user) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(removeUser(user.id))
  }

  const editUserHandle = (user) => {
    const locationObj = {
      pathname: navigationLinks.userForm.href,
      state: { userDataForEdit: user, isEdit: true}
    }
    dispatch(editUser(user))
    history.push(locationObj)
  }

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Gender</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userList.map((user) => (
            <TableRow key={user.id} onClick={() => editUserHandle(user)}>
              <TableCell component="th" scope="row">
                {user.name}
              </TableCell>
              <TableCell align="right">{user.email}</TableCell>
              <TableCell align="right">{user.gender}</TableCell>
              <TableCell align="right">{user.status}</TableCell>
              <TableCell onClick={(e) => {deleteIconOnclickHandler(e, user)}} align="right"><DeleteIcon /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default withRouter(TableComponent);