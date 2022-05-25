import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import Home from './page/Home';
import People from "./page/People";
import NotFound from './page/NotFound';
import Settings from "./page/Settings";
import Schedule from "./page/Schedule";

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
                <li><Link to="/settings">Settings</Link></li>
                <li><Link to="/schedule">Schedule</Link></li>
              </ul>
            </nav>
          </aside>
          </Col>
          <Col xs="8">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/people" element={<People />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </Router>
  )
}

export default App
