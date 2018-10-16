import Layout from '../components/layout'
import LicenseTable from '../components/license-table'
import ErrorBoundary from './../components/error-boundries';


const LicenseManagement = () => (
  <Layout>
    <h1>License management</h1>
    <ErrorBoundary>
      <LicenseTable/>
    </ErrorBoundary>
  </Layout>
)

LicenseManagement.getInitialProps = async ({ pathname }) => {
  console.log(pathname);
  }

export default LicenseManagement