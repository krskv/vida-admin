import Head from "next/head"
import Topbar from "./topbar"
import Sidebar from "./sidebar"
import "../styles/layout.sass"

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="layout">
      <Head>
        <title>Vida</title>
        <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed:300,300i,400,400i,700,700i" rel="stylesheet"></link>
      </Head>
      <div className="sidebar_wrapper">
        <Sidebar/>
      </div>
      <div className="page_wrapper">
        <div className="topbar_wrapper container">
          <Topbar/>
        </div>
        <hr/>
        <div className="page_content container">
          {this.props.children}
        </div>
      </div>
    </div>
    );
  }
}


export default Layout;