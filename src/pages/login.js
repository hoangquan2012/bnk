import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { login } from "../reducer/auth";
import { useDispatch, useSelector } from "react-redux";

import { selectIsAuthenticated } from "../reducer/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFinish = (values) => {
    setUsername(values.username);
    setPassword(values.password);
    handleLogin();
    console.log('1231231')
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const handleLogin = () => {
    dispatch(login({ username, password }));
  };
  const isAuthenticated = useSelector(selectIsAuthenticated);

  if (isAuthenticated === true) {
    navigate("/home");
  }
  const passwordValidator = (rule, value, callback) => {
    if (value && value.length < 6) {
      callback("Mật khẩu phải có ít nhất 6 ký tự");
    } else {
      callback();
    }
  };
  const validateMessages = {
    types: {
      email: "${label} is not a valid email!",
    },
  };
  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
        position: "absolute",
        top: "50%",
        left: "50% ",
        transform: "translate(-50%, -50%)",
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      validateMessages={validateMessages}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: "username is not a valid email!",
            message: "Please input your email!",
            type: "email",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
          {
            validator: passwordValidator, // Sử dụng hàm kiểm tra độ dài mật khẩu
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
