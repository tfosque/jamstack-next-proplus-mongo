import '../styles/global.css'
import { Container } from "react-bootstrap";
import NavigationBar from "../components/navigationBar";
import ProplusNavbar from "../components/proplusNavbar";
import CarouselDisplay from '../components/carousel'
import { useRouter } from 'next/router'
import Search from '../components/search'

import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const hideMenu = router.pathname === '/'
  const hideCarousel = router.pathname !== '/demo'
  // console.log({router}, {hideMenu}, {hideCarousel})

  return (
    <div>
      <div className="mb-4" style={{ display: hideMenu ? 'none' : 'display'}}>
        <ProplusNavbar />
        <NavigationBar />
        <Search />
        <CarouselDisplay hide={hideCarousel} />
      </div>
      <Container fluid> 
        <Component {...pageProps} />
      </Container>
    </div>
  );
}

export default MyApp;
