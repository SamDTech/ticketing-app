import axios from "axios";
const LandingPage = ({ currentUser }) => {
  console.log(currentUser);
  return <h1>Landing Page</h1>;
};

LandingPage.getInitialProps = async ({ req }) => {
  if (typeof window === "undefined") {
    // we are on the server
    // request should be made to http://ingress-nginx.ingress-ingress
    const { data } = await axios.get(
      "http://ingress-nginx-controller.kube-system.svc.cluster.local/api/users/currentuser",
      {
        headers: req.headers,
      }
    );
    return data;
  } else {
    // we are in the client
    // request can be made to a base URL of ''
    const { data } = await axios.get("/api/users/currentuser");
    return data;
  }
};

export default LandingPage;
