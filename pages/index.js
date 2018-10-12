import "../styles/main.sass"
import Layout from '../components/layout'

const Dashboard = () => (
  <Layout>
    <h1>Dashboard</h1>
  </Layout>
)

Dashboard.getInitialProps = async ({ pathname }) => {
console.log(pathname);
}

export default Dashboard