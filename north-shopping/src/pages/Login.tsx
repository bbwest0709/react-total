import React, { useState } from 'react'
import Title from '../components/Title'
import { useCartStore } from '../store/useStrore';
import { useNavigate } from 'react-router-dom';
import "./scss/form.scss";

const Login = () => {
  const { login } = useCartStore();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const user = {
      email: form.email,
      password: form.password
    }
    login(user, navigate);
  }

  return (
    <div className='container'>
      <Title title="로그인" />
      <form className="form" onSubmit={handleSubmit}>
        <p><input type="email" name='email' required onChange={handleChange} /></p>
        <p><input type="password" name='password' required onChange={handleChange} /></p>
        <p className='btn'><button className='black-btn' type='submit'>로그인</button></p>
      </form>
    </div>
  )
}

export default Login
