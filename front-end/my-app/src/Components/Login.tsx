import React, { useState } from "react"; 
import { Button, Form, Segment} from "semantic-ui-react"
function Login() {
    let userInfo = "";

    const initialState = {
        username: "",
        password: ""
    }

    const [form, useForm] = useState(initialState);

    function handleChange (e: any) {
        const { name, value } = e.target
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useForm({
          ...form,
          [name]: value
        })
    }

    function handleSubmit (e:any) {
        e.preventDefault()
        userInfo = form.username
        console.log(userInfo)
    }

    return (
      <Segment inverted>
        <Form inverted>
            <Form.Group widths='equal'>
                <Form.Input
                    fluid label='Username'
                    name="username"
                    type="text"
                    className="form-username"
                    placeholder="Username"
                    onChange={handleChange}
                    value={form.username}
                />
                <Form.Input
                    fluid label='Password'
                    name="password"
                    type="password"
                    className="form-password"
                    placeholder="Password"
                    onChange={handleChange}
                    value={form.password}
                />
                </Form.Group>
                <Button onClick={handleSubmit}>Login</Button>
        </Form>
      </Segment>
    )
  }

export default Login;

