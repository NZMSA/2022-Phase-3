import React, { useState } from "react"; 

function Login() {
    const initialState = {
        username: '',
        password: ''
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

    return (
      <form>

        <h3>Login</h3>

          <label>Username</label>
          <input
            type="text"
            className="form-username"
            placeholder="Username"
            onChange={handleChange}
            // value={form.username}
          />

          <label>Password</label>
          <input
            name="password"
            type="password"
            className="form-password"
            placeholder="Password"
            onChange={handleChange}
            value={form.password}
          />
          
          <button>
            Login
          </button>
      </form>
    )
  }

export default Login;

// export function loginCustomer (customer) {
//     return request.post('/login')
//       .send({
//         username: customer.username,
//         password: customer.password
//       })
//       .then(res => res.body)
//   }