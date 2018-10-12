import Link from "next/link"
import "../styles/sidebar.sass"
import { ROUTING_DATA } from './routing-data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

class Sidebar extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {sidebar_collapsed: false};
    this.collapseSidebar = this.collapseSidebar.bind(this);
    this.getRoutingData = this.getRoutingData.bind(this);
  }

  getRoutingData(){
    const rd = ROUTING_DATA.map((el,index) =>
      <li key={index}><Link href={el.path}><a className="sidebar_navlink"><FontAwesomeIcon icon={['fas', el.icon]} /><span>{el.title}</span></a></Link></li>
    );

    return (
      <ul>{rd}</ul>
    )
  }  

  componentDidMount() {
    //onmount checks whether sidebar is collapsed or not
    const sidebar_collapsed = localStorage.getItem("sidebar_collapsed")? localStorage.getItem("sidebar_collapsed"): "false";
    this.setState({sidebar_collapsed: (sidebar_collapsed == "true")});
  }

  collapseSidebar(){
    this.setState({sidebar_collapsed: !this.state.sidebar_collapsed});
    localStorage.setItem("sidebar_collapsed", !this.state.sidebar_collapsed)
  }
  
  render() {
    return (
      <div className={this.state.sidebar_collapsed ? ' collapsed sidebar' : 'sidebar'}>
        <div className="sidebar_head">
          <div className="sidebar_logo">VIDA</div>
          <button onClick={this.collapseSidebar} className="sidebar_collapse"><FontAwesomeIcon icon={['fas', 'bars']} /></button>
        </div>
        <nav className="sidebar_navigation">
          {this.getRoutingData()}
        </nav>
      </div>
    );
  }
}

export default Sidebar