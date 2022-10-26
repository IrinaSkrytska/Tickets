import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Footer from './Footer';
import Ticket from './Ticket';
import TicketDetails from './TicketDetails';
import TravelOptions from './TravelOptions';
import Trip from './Trip';
import Notifications from './Notifications';
import NotFoundPage from './NotFoundPage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="tickets/:ticketId/" element={<Ticket />} />
        <Route path="tickets/:ticketId/settings" element={<TicketDetails />} />
        <Route path="tickets/:ticketId/options" element={<TravelOptions />} />
        <Route path="tickets/:ticketId/options/trip" element={<Trip />} />
        <Route
          path="tickets/:ticketId/notifications"
          element={<Notifications />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
};
