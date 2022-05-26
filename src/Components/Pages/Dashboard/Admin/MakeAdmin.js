import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserLock, faTrashCan, faUserPlus, faUserShield } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import { useQuery } from 'react-query';
import ReactReloadSpinier from '../../../Animation/ReactReloadSpinier';
import { toast } from 'react-toastify';
import DeleteModalAdmin from './Deleted/DeleteModalAdmin'


const MakeAdmin = () => {
  const [users, setUsers] = useState([]);
  const [deleteAdmin, setDeleteAdmin] = useState([]);
  console.log(deleteAdmin);
  const navigate = useNavigate();

  // const { data: users, isLoading } = useQuery('users', () => fetch(`http://localhost:5000/user`, {
  //   method: "GET",
  //   headers: {
  //     authorization: `Bearer${localStorage.getItem("accessToken")}`
  //   }
  // }).then(res => res.json()))

  // if (isLoading) {
  //   return <ReactReloadSpinier></ReactReloadSpinier>
  // }



  useEffect(() => {
    fetch(`http://localhost:5000/user`, {
      method: "GET",
      headers: {
        "authorization": `Bearer ${localStorage.getItem("accessToken")}`
      }
    })
      .then(res => {
        if (res.status === 401 || res.status === 403) {
          signOut(auth)
          localStorage.removeItem("accessToken");
          navigate('/')
        }
        return res.json()
      })
      .then(data => setUsers(data));
  }, [navigate])


  //  axios.get(`http://localhost:5000/user`, {
  //   headers: {
  //    "authorization": `Bearer ${localStorage.getItem("accessToken")}`
  //   }
  //  })
  //   .then(response => {
  //    setUsers(response.data)
  //    console.log(response.config.headers.authorization)
  //    if (response.status === 401 || response.status === 403) {
  //     signOut(auth)
  //     localStorage.removeItem("accessToken");
  //     navigate('/')
  //    }
  //   });
  // }, [navigate])

  const handelMakeAdmin = email => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: "PUT",
      headers: {
        "authorization": `Bearer ${localStorage.getItem("accessToken")}`
      }
    })
      .then(res => {
        if (res.status === 401 || res.status === 403) {
          signOut(auth)
          localStorage.removeItem("accessToken");
          navigate('/')
        }
        return res.json()

      })
      .then(data => {
        if (data.modifiedCount > 0) {
          toast.success('Admin Access Authorize');
          console.log(data)
          setTimeout(function () {
            window.location.reload(1);
          }, 4000);
        }
        else {
          toast.error("Failed to given access")
        }
      });

  }


  // console.log("State Data", users);

  return (
    <div class="hero min-h-screen bg-accent items-start ">
      <div class="overflow-x-auto">
        <table class="table w-full overflow-x-auto">
          <thead >
            <tr>
              <th>User</th>
              <th>User Id</th>
              <th>Action</th>
              <th>Frizz</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            {
              users.map(user =>
                <tr>
                  <td>{user.email}</td>
                  <td>{user._id}</td>
                  <td>
                    {
                      (user.role === "admin") && <Link to='' class="btn btn-xs border-0  text-white bg-green-600 hover:bg-green-600">
                        <FontAwesomeIcon icon={faUserShield} className='pr-2'></FontAwesomeIcon>
                        Admin</Link>
                    }
                    {
                      !(user.role === "admin") && <button onClick={() => handelMakeAdmin(user.email)} class="btn btn-xs border-0 bg-accent text-green-600 hover:text-white hover:bg-green-500">
                        <FontAwesomeIcon icon={faUserPlus} className='pr-2'></FontAwesomeIcon>
                        Make Admin</button>
                    }
                  </td>
                  <td>
                    <button class="btn btn-xs border-0 bg-accent text-primary hover:text-white hover:bg-primary">
                      <FontAwesomeIcon icon={faUserLock} className='pr-2'></FontAwesomeIcon>
                      Frizz Admin</button>
                  </td>
                  <td>
                    <label for="toggle-modal" onClick={() => setDeleteAdmin(user.email)} class="btn modal-button  btn-xs border-0 bg-accent text-red-600 hover:text-white hover:bg-red-500">
                      <FontAwesomeIcon icon={faTrashCan} className='pr-2'></FontAwesomeIcon>
                      Delete Admin
                    </label>
                    {/*                     <button for="toggle-modal" onClick={() => handelDeleteAdmin(user._id)} class="btn modal-button  btn-xs border-0 bg-accent text-red-600 hover:text-white hover:bg-red-500">
                      <FontAwesomeIcon icon={faTrashCan} className='pr-2'></FontAwesomeIcon>
                      Delete Admin
                    </button> */}
                  </td>
                </tr>
              )
            }
          </tbody>
        </table>

        {deleteAdmin && <DeleteModalAdmin deleteAdmin={deleteAdmin}></DeleteModalAdmin>}

      </div>
    </div>
  );
};

export default MakeAdmin;