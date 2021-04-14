import axios from "axios";

import buildClient from "../api/build-client";
const LandingPage = ({currentUser}) => {
  return currentUser ? (
    <h1>You are Logged In </h1>
  ) : (
    <h1>You are NOT logged In</h1>
  );
};

export async function getServerSideProps(context) {
  const client = buildClient(context);
  const { data } = await client.get("/api/users/currentuser");
  return {
    props: data,
  };
}

export default LandingPage;
