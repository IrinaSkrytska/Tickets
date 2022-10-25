import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Footer from './Footer';
import Ticket from './Ticket';
import TicketDetails from './TicketDetails';
import TravelOptions from './TravelOptions';
import Trip from './Trip';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="tickets/:ticketId/" element={<Ticket />} />
        <Route path="tickets/:ticketId/settings" element={<TicketDetails />} />
        <Route
          path="tickets/:ticketId/settings/options"
          element={<TravelOptions />}
        />
        <Route
          path="tickets/:ticketId/settings/options/trip"
          element={<Trip />}
        />
      </Routes>
      <Footer />
    </>
  );
};
