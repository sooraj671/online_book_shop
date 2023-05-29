import React from 'react';
import 'antd/dist/antd.css';
import { useState } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {Link, useNavigate} from 'react-router-dom';
import {Header} from './Header';
import {Books} from './Books';
import Password from 'antd/lib/input/Password';

// link for mysql and node: https://www.youtube.com/watch?v=YYEC7ydDj4k
const LoginForm = () => {

 {/* const express = require('express')
  const mysql = require('mysql')

  const db = mysql.createConnection({
    host: 'localhost',
    user : 'root',
    password: ''
  })*/}

  const [isLoggedIn, setIsLoggedIn] = useState();
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  console.log('initial value of isLoggedIn: ' + isLoggedIn);

  const navigate = useNavigate()

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };


  const HandleEmail= (event) =>{
      console.log(event.target.value)
      setEmail(event.target.value)
  }
  const HandlePassword= (event) =>{
    console.log(event.target.value)
    setPwd(event.target.value)
}
  const loginBtnFtn = (e)=> 
  {
    let data = { email: email, pwd: pwd};
    console.log(data)
    fetch('http://localhost:8001/login', {
      method: 'POST',
      headers: {'Accept': 'application/json', 'Content-Type':'application/json'},
      body: JSON.stringify(data)
    }).then(function(res){
      console.log(res.json())
    });
      alert('Login Successful!');
      var eml = email;
      var pw = pwd;
      let user = { email: {eml}, password : {pw}};
      localStorage.setItem('user', JSON.stringify(user));
      if(localStorage.getItem('user') !== null){
        setIsLoggedIn(true);
        
        <Header true/>;
        <Books true/>;
        navigate('/books');
      }
      
  }

  
  return (
    <>
      <div style={{ 
        display: 'flex',  justifyContent:'center', alignItems:'center'
      }}> 
        
        <div>
          <br/>
          <h3>To continue, you must login first</h3>
          <br/>
        </div>
      </div>
      <div style={{ 
        display: 'flex',  justifyContent:'center', alignItems:'center'
      }}>
        <Form
          layout="vertical"
          name="login_form"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                message: 'Please input your Eamil!',
              },
            ]}
          >
            <Input 
              onChange = {HandleEmail}
              prefix={<UserOutlined className="site-form-item-icon" />} 
              type='text' 
              placeholder="Email"
              value={email}  
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input
              onChange = {HandlePassword}
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
              value ={pwd}
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </Form.Item>

          <Form.Item>
            <Button type="primary" onClick = {loginBtnFtn} style={{width: '100%'}}>
              Log in
            </Button>

            <br/><br/>
            Or <Link to="/register">register now! </Link>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}

export default LoginForm;