import 'antd/dist/antd.css';
import {Link, useNavigate} from 'react-router-dom'
import {useState} from 'react'

import {
  Form,
  Input,
  Checkbox,
  Button
} from 'antd';


const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const RegistrationForm = () => {
  const [form] = Form.useForm();

  const [name, setName]  = useState('');
  const [email, setEmail]  = useState('');
  const [pwd, setPwd]  = useState('');
  const [address, setAddress]  = useState('');
  const [contact, setContact]  = useState('');

  const navigate = useNavigate();

  const addUser=(e)=>{
    let data = {name: name, email: email, password: pwd, address: address, contact: contact};
    console.log(data)
    fetch('http://localhost:8001/api/create', {
      method: 'POST',
      headers: {'Accept': 'application/json', 'Content-Type':'application/json'},
      body: JSON.stringify(data)
    }).then(function(res){
      console.log(res.json())
    });
    alert ('User Added');
    navigate('/login')
    e.preventDefault();
  }

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <>
      <div style={{ 
        display: 'flex',  justifyContent:'center', alignItems:'center'
      }}>
        <div>
          <br/>
          <h3>Register your account</h3>
        <br/>
        </div>
      </div>
      <div style={{ 
        display: 'flex',  justifyContent:'center', alignItems:'center'
      }}>
        <Form
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          initialValues={{
            residence: ['zhejiang', 'hangzhou', 'xihu'],
            prefix: '86',
          }}
          scrollToFirstError
        >
          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ]}
          >
            <Input onChange={(e)=>setEmail(e.target.value)}/>
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
            hasFeedback
          >
            <Input.Password onChange={(e)=>setPwd(e.target.value)}/>
          </Form.Item>

          <Form.Item
            name="full_name"
            label="Full Name"
            tooltip="What do you want others to call you?"
            rules={[
              {
                required: true,
                message: 'Please input your fullname!',
                whitespace: true,
              },
            ]}
          >
            <Input onChange={(e)=>{setName(e.target.value)}}/>
          </Form.Item>

          <Form.Item
            name="residence"
            label="Address"
            rules={[
              {
                required: true,
                message: 'Please select your habitual residence!',
              },
            ]}
          >
             <Input
              onChange={(e)=>setAddress(e.target.value)}
              style={{
                width: '100%',
              }}
            />
          </Form.Item>

          <Form.Item
            name="phone"
            label="Phone Number"
            rules={[
              {
                required: true,
                message: 'Please input your phone number!',
              },
            ]}
          >
            <Input
              onChange={(e)=>setContact(e.target.value)}
              style={{
                width: '100%',
              }}
            />
          </Form.Item>
          
          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
              },
            ]}
            {...tailFormItemLayout}
          >
            <Checkbox>
              I have read the <Link to="/agreement">agreement </Link>

            </Checkbox>
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit" onClick={addUser}>
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default RegistrationForm;