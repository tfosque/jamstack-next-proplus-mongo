import '../styles/global.css'
import { Container } from "react-bootstrap";
import NavigationBar from "../components/navigationBar";
import ProplusNavbar from "../components/proplusNavbar";

import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <div className="mb-4">
        <ProplusNavbar />
        <NavigationBar />
      </div>
      <Container fluid> 
        <Component {...pageProps} />
      </Container>
    </div>
  );
}

export default MyApp;
