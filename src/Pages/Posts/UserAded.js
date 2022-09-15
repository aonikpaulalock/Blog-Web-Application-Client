import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import Swal from 'sweetalert2'
import axios from "axios";
import useUserBlog from '../../Hooks/useUserBlog';
import Edit from './Edit';
const UserAded = () => {
  const [user] = useAuthState(auth)
  const [blogs, setBlogs] = useUserBlog(user);

  const handleDelete = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        const url = `https://web-app-server.vercel.app/post/${id}`
        axios
          .delete(url)
          .then(response => {
            const filterDelete = blogs.filter(product => product._id !== id)
            setBlogs(filterDelete)
          })
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }

  return (
    <div className="container">
      <div className="col">
        {
          blogs?.map(post =>
            <div className="card mb-3" key={post._id}>
              <img className="card-img-top img-fluid" src={post.img} alt="" />
              <div className="card-body">
                <h5 className="card-title-name">{post.name}</h5>
                <div className="d-flex justify-content-between align-items-center">
                  <h1 className="main-title">{post.mainTitle}</h1>
                </div>
                <h6 className="card-sub-title">{post.subTitle}</h6>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <img src={post.userImg} alt="" />
                    <h5 className="userName">{post.user}</h5>
                  </div>
                  <div class="dropdown">
                    <button class="svg-dropdown" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#000000" className="bi bi-three-dots " viewBox="0 0 16 16">
                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                      </svg>
                    </button>
                    <div class="dropdown-menu border-0 shadow " aria-labelledby="dropdownMenuButton">
                      <Edit post={post} setBlogs={setBlogs} blogs={blogs} />
                      <h5 class="dropdown-item d-flex align-items-center fw-semibold text-muted" onClick={() => handleDelete(post._id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="rgb(255, 81, 81)" class="bi bi-archive-fill me-3" viewBox="0 0 16 16">
                          <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z" />
                        </svg>
                        Delete</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default UserAded;