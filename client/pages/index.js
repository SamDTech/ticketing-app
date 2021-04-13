import axios from "axios";
const LandingPage = ({ currentUser }) => {
  console.log(currentUser);
  return <h1>Landing Page</h1>;
};

LandingPage.getInitialProps = async () => {
    if (typeof window === 'undefined') {
        // we are on the server
        // request should be made to http://ingress.
    } else {
        // we are in the client
        // request can be made to a base URL of ''
    }
};

export default LandingPage;
