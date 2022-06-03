import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import Home from './page/Home';
import Contacts from "./page/Contacts";
import Contact from './page/Contact';
import NotFound from './page/NotFound';
import Settings from "./page/Settings";
import Schedule from "./page/Schedule";
import Event from './page/Event';

const App = () => {
  return (
    <Router>
      <Container>
        <Row>
          <Col xs="2">
          <aside>
            <nav>
              <ul>
                <li><strong><Link to="/">Famly Seams</Link></strong></li>
              </ul>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/people">People</Link></li>
                <li><Link to="/schedule">Schedule</Link></li>
                <li><Link to="/settings">Settings</Link></li>
              </ul>
            </nav>
          </aside>
          </Col>
          <Col xs="8">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/people" element={<Contacts />} />
              <Route path="/people/:id" element={<Contact />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/event/:id" element={<Event />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </Router>
  )
}

export default App
