import "../styles/login.sass"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../styles/topbar.sass"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faKey,faUser } from '@fortawesome/free-solid-svg-icons'

library.add(faUser)
library.add(faKey)

const Login = () => (
  <div className="login_wrapper">
    <h1>Vida</h1>
    <p>Dear user, log in to access the admin area!</p>
    <form  className="login_form">
      <div className="login_input_wrapper">
        <FontAwesomeIcon className="input_icon" icon="user" />
        <input type="text" name="username" placeholder="Username"></input>
      </div>
      <div className="login_input_wrapper">
        <FontAwesomeIcon className="input_icon" icon="key" />
        <input type="password" name="password" placeholder="Password"></input>
      </div>
      <input type="submit" name="" value="Login"></input>
    </form>
  </div>
    
)

Login.getInitialProps = async ({ pathname }) => {
console.log(pathname);
}

export default Login