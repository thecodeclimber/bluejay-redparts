import DataTable from '~/components/admin/DataTable';
import Layout from './Layout';
function admin(props: any) {
  return (
    <>
      <Layout>
        <DataTable />
      </Layout>
    </>
  );
}

export default admin;
