import "../styles/main.sass"
import Layout from '../components/layout'
import LicenseTable from '../components/license-table'


const LicenseManagement = () => (
  <Layout>
    <h1>License management</h1>
    <LicenseTable/>
  </Layout>
)

LicenseManagement.getInitialProps = async ({ pathname }) => {
  console.log(pathname);
  }

export default LicenseManagement