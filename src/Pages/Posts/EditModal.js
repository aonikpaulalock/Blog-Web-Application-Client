import React from 'react';
import { Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../Firebase.init';
import useData from '../../Hooks/useData';
const EditModal = ({ post, blogs, setBlogs }) => {
  const { register, formState: { errors }, handleSubmit, reset } = useForm();
  const [user] = useAuthState(auth)
  const onSubmit = (data) => {
    const blogs = {
      name: data.userName,
      mainTitle: data.blogname,
      subTitlt: data.description
    }
    console.log(blogs);
    fetch(`http://localhost:4200/post/${post._id}`, {
      method: 'PUT',
        // headers: {
         
        // },
      body: JSON.stringify(blogs)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.modifiedCount > 0) {
          toast.success(`Successfully Edited Blogs`);
        }
        console.log(data);
      })
  }
  return (
    <Form className="from-back ms-3 ms-0" onSubmit={handleSubmit(onSubmit)}>
      <input class="input-feild"
        type="text"
        placeholder={post?.user}
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
      <input
        class="input-feild"
        type="text"
        placeholder={post.mainTitle}
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
        rows="5"
        placeholder={post.subTitle}
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
      <button type="submit" className="Signup-Button">Save</button>
    </Form>
  );
};

export default EditModal;