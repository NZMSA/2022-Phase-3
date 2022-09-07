import React, { useState } from 'react'; 
import { motion } from 'framer-motion';
import { loginUser } from '../api/apiClient'

function Login(props: any) {
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
        loginUser(form)
        // if (loginUser === true) {
        //     props.history.push('/Search')
        // } else 
        
        console.log(props.history)
        userInfo = form.username
        console.log(userInfo)
    }

    return (
            <motion.div 
                animate={{rotate: [0, 50, -20, 20, -10, 50, -30, 40, 0, 20, -25, 360], scale:2.5}} 
                transition={{duration: 5}}
                >
                    <div className="form-container">
                        <div className="background">
                            <div className="shape"></div>
                            <div className="shape"></div>
                        </div>

                        <form>
                                <h4>Sign In</h4>
                                <label className="form-label">Username</label>
                                <input
                                    name="username"
                                    type="text"
                                    className="form-input"
                                    placeholder='Email or Phone'
                                    onChange={handleChange}
                                    value={form.username}
                                />
                                <label className="form-label">Password</label>
                                <input
                                    name="password"
                                    type="password"
                                    className="form-input"
                                    placeholder='Password'
                                    onChange={handleChange}
                                    value={form.password}
                                />
                                <button 
                                    type="submit" 
                                    className="form-button"
                                    onClick={handleSubmit}
                                >
                                    Login
                                </button>
                        </form>
                    </div>
            </motion.div>
    )
  }

export default Login;

// const icon = {
//     hidden: {
//       opacity: 0,
//       pathLength: 0,
//       fill: "rgba(255, 255, 255, 0)"
//     },
//     visible: {
//       opacity: 1,
//       pathLength: 1,
//       fill: "rgba(255, 255, 255, 1)"
//     }
//   };
  
//   export const Example = () => (
//     <div className="container">
//       <motion.svg
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 100 100"
//         className="item"
//       >
//         <motion.path
//           d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z"
//           variants={icon}
//           initial="hidden"
//           animate="visible"
//           transition={{
//             default: { duration: 2, ease: "easeInOut" },
//             fill: { duration: 2, ease: [1, 0, 0.8, 1] }
//           }}
//         />
//       </motion.svg>
//     </div>
//   );