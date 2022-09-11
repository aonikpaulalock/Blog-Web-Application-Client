import React from 'react';
import { Form } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import auth from '../../Firebase.init';
import "../../Styles/AddBlogs.css"
const AddBlogs = ({ handleClose }) => {
  const [user] = useAuthState(auth)
  console.log(user);
  const { register, formState: { errors }, handleSubmit, reset } = useForm();
  const imagekey = "d56f1c4be5a28924ce053f9e7a88d941";
  const onSubmit = async (data) => {
    const image = data.image[0];
    const url = `https://api.imgbb.com/1/upload?key=${imagekey}`;
    const formData = new FormData();
    formData.append('image', image);
    fetch(url, {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(result => {
        if (result.success) {
          const img = result.data.url;
          const blogs = {
            email: user?.email,
            user: data.userName,
            userImg: data.userImg,
            img: img,
            mainTitle: data.blogname,
            subTitle: data.description,
            name: data.name
          }
          console.log(blogs)
          fetch("http://localhost:4200/post", {
            method: "POST",
            headers: {
              'content-type': 'application/json',
            },
            body: JSON.stringify(blogs)
          })
            .then(res => res.json())
            .then(inserted => {
              if (inserted.insertedId) {
                // reset();
                handleClose(true)
                toast.success('Blogs added successfully')
              }
              else {
                toast.error('Failed to add the Blogs');
                handleClose(false)
              }
            })
        }
      })
  }
  return (
    <Form className="from-back ms-3 ms-0" onSubmit={handleSubmit(onSubmit)}>
      <input class="input-feild"
        type="email"
        placeholder={user?.email}
        readOnly
        {...register("email")}
      />
      <input class="input-feild"
        type="text"
        placeholder="Enter Your Name"
        autoComplete='off'
        {...register("userName", {
          required: {
            value: true,
            message: 'Name is Required'
          }
        })}
      />
      <label className="text-center">
        {errors.name?.type === 'required' && <span className="text-danger">{errors.name?.message}</span>}
      </label>
      <input class="input-feild"
        type="text"
        placeholder="Enter Your Image"
        autoComplete='off'
        {...register("userImg")}
      />
      <input
        class="input-feild"
        type="text"
        placeholder="Enter Blog Heading"
        autoComplete='off'
        {...register("blogname", {
          required: {
            value: true,
            message: 'blogname is Required'
          }
        })}
      />
      <label className="text-center">
        {errors.name?.type === 'required' && <span className="text-danger">{errors.name?.message}</span>}
      </label>
      <textarea
        type="text"
        rows="3"
        placeholder="Enter Blogs Details"
        className="input-feild"
        autoComplete='off'
        {...register("description", {
          required: {
            value: true,
            message: 'description is Required'
          }
        })}
      />
      <label className="text-center">
        {errors.description?.type === 'required' && <span className="text-danger">{errors.description?.message}</span>}
      </label>
      <select  {...register('name')} class="form-select input-feild mx-auto"
        aria-label="Default select example"
      >
        <option>✍️ Article</option>
        <option>🔬️ Education</option>
        <option>💼️ Job</option>
        <option>🗓️ Meetup</option>
      </select>
      <label className="text-center">
        {errors.title?.type === 'required' && <span className="text-danger">{errors.title?.message}</span>}
      </label>
      <input
        class="input-file input-feild"
        type="file"
        id="formFile"
        {...register("image", {
          required: {
            value: true,
            message: 'Image is Required'
          }
        })}
      />
      <label className="text-center">
        {errors.name?.type === 'required' && <span className="text-danger">{errors.image?.message}</span>}
      </label>
      <button type="submit" className="Signup-Button">Post</button>
    </Form>
  );
};

export default AddBlogs;