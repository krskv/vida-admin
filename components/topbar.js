import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../styles/topbar.sass"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

library.add(faSignOutAlt)

const Topbar = () => (
  <div className="topbar">
    <div className="topbar_left">
      <div className="topbar_userinfo">
        <div className="topbar_userinfo_name">John Dou</div>
      </div>
    </div>
    <div className="topbar_right">
      <button className="topbar_logout">
        <span>Logout</span>
        <FontAwesomeIcon icon="sign-out-alt" />
      </button>
    </div>
  </div>
);

export default Topbar;