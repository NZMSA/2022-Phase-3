import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';


function Login() {
    const navigate = useNavigate();

    function dogSubmit (e:any) {
        e.preventDefault()
        navigate('/Search')

    }

    function chatSubmit (e:any) {
        e.preventDefault()
        navigate('/Chat')
    }

    return (
            <motion.div 
                animate={{rotate: [0, 50, -20, 20, -10, 50, -30, 40, 0, 20, -25, 360], scale:1.5}} 
                transition={{duration: 5}}
                >
                    <div className="form-container">
                        <form>
                                <h4>Welcome</h4>
                                
                                <button 
                                    type="submit" 
                                    className="form-button"
                                    onClick={dogSubmit}
                                >
                                    Dog Search
                                </button>
                                <button 
                                    type="submit"
                                    className="form-button"
                                    onClick={chatSubmit}
                                >
                                    Web Chat
                                </button>
                        </form>

                        <footer>
                            MSA Phase 3 | Front-end | tsoukent97@outlook.com | <a href="https://github.com/tsoukent97" target="blank">Github</a> 
                        </footer>
                    </div>
            </motion.div>
    )
  }

export default Login;