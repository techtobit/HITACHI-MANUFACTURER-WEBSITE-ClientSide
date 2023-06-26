import axios from 'axios';
import React, { useEffect } from 'react';
import { toast } from 'react-toastify';

const Modal = ({ deleteAdmin }) => {
   const DeleteModalAdmin = email => {
      /*    fetch(`https://hitachi-tool.onrender.com/user/admin/${id}`, {
         method: "DELETE",
         headers: {
          "authorization": `Bearer ${localStorage.getItem("accessToken")}`
         }
        })
         .then(res => res.json())
         .then(data => {
          console.log(data);
          toast.success('Cart Deleted')
          setTimeout(function () {
           window.location.reload(1);
          }, 4000);
       })  */

      const url = `https://hitachi-tool.onrender.com/user/admin/${email}`
      axios.delete(url, email)
         .then(response => {
            console.log(response)
         })
      toast.success(`This ${email} Admin is Delete`)
      setTimeout(function () {
         window.location.reload(1);
      }, 4000);
   }
   return (
      <div>
         <input type="checkbox" id="toggle-modal" class="modal-toggle" />
         <div class="modal modal-bottom sm:modal-middle">
            <div class="modal-box justify-center text-center">
               <h3 className='text-xl pb-2 font-semibold text-red-400'>Do you Want To Delete Admin?</h3>
               {/*      <div class="avatar">
      <div class="w-24 rounded-xl">
       <img src={img} />
      </div>
     </div> */}
               {/* <h3 class="font-bold text-lg">Email {email}</h3> */}
               <div className='flex py-4 justify-center'>
                  <p>User : {deleteAdmin}</p>
               </div>
               <div class="modal-action justify-center">
                  <label for="toggle-modal" class="btn  btn-primary ">Cancel</label>
                  <button for="toggle-modal" onClick={() => DeleteModalAdmin(deleteAdmin)} class="btn  btn-error">Delete</button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Modal;