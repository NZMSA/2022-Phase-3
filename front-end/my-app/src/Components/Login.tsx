import React, { useState } from "react"; 
import { motion } from "framer-motion";

function Login() {
    let userInfo = "";

    const initialState = {
        username: "",
        password: ""
    }

    const [form, useForm] = useState(initialState);
    // const [move, setMove]= useState(false)

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
        <div className="login-container">
            <h3>Doggy Notebook</h3>
            <h4>Please sign in</h4>
            <motion.div 
                animate={{rotate: [0, 50, -20, 20, -10, 50, -30, 40, 0, 20, -25, 360], scale:2.5}} 
                transition={{duration: 5}}
                // animate={{
                //   scale: [1, 2, 2, 1, 1],
                //   rotate: [0, 0, 180, 180, 0],
                //   borderRadius: ["0%", "0%", "50%", "50%", "0%"]
                // }}
                // transition={{
                //   duration: 2,
                //   ease: "easeInOut",
                //   times: [0, 0.2, 0.5, 0.8, 1],
                //   repeat: Infinity,
                //   repeatDelay: 1
                // }}
                >
                    <div className="form-container">
                        <form>
                                <input
                                    name="username"
                                    type="text"
                                    className="form-username"
                                    placeholder="Username"
                                    onChange={handleChange}
                                    value={form.username}
                                />
                                <input
                                    name="password"
                                    type="password"
                                    className="form-password"
                                    placeholder="Password"
                                    onChange={handleChange}
                                    value={form.password}
                                />
                                <button className="form-button"onClick={handleSubmit}>Login</button>
                        </form>
                    </div>
            </motion.div>
        </div>
    )
  }

export default Login;

