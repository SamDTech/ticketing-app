import axios from "axios";
import buildClient from "../api/build-client";
const LandingPage = ({ currentUser }) => {
  return currentUser ? (
    <h1>You are Logged In</h1>
  ) : (
    <h1>You are NOT logged In</h1>
  );
};

LandingPage.getInitialProps = async (context) => {
  const { data } = await buildClient(context).get("/api/users/currentuser");

  return data;
};

export default LandingPage;
