import { withPageAuthRequired } from "@auth0/nextjs-auth0";
const authRequired = () => {
  return <div>You can see this if you are logged in (Authorised)</div>;
};

export default authRequired;
export const getServerSideProps = withPageAuthRequired();
