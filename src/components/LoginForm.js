import React from "react";
import { Form, Input, Button, Checkbox, message } from "antd";
import { useHistory } from "react-router-dom";

import { useInputState } from "../hooks/useInputState";
import { postData } from "../utils/Api";

const LoginFrom = () => {
  const [email, setEmail, resetEmail] = useInputState("");
  const [password, setPassword, resetPassword] = useInputState("");

  const history = useHistory();

  const onFinish = async () => {
    if (!password.length || !email.length) {
      message.info("Please fill all the input fields", 4);
      return;
    }
    const data = {
      email,
      password,
    };

    postData("api/user/login", data)
      .then((res) => {
        if (res.status === 200) {
          console.log(res);
          localStorage.setItem("JWT_TOKEN", res.data.token);
          history.push("/dashboard");
          message.success(`welcome`);
          resetEmail();
          resetPassword();
        }
      })
      .catch((err) => {
        // message.error(err 4);
        console.log(err);
      });
  };
  return (
    <>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input
            className="b-r"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </Form.Item>
        <Form.Item
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            className="b-r"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            value={password}
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="/forgot-password">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button b-r"
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default LoginFrom;
