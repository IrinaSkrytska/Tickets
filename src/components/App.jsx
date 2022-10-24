import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Footer from './Footer';
import Ticket from './Ticket';
import TicketDetails from './TicketDetails';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="tickets/:ticketId/" element={<Ticket />} />
        <Route path="tickets/:ticketId/details" element={<TicketDetails />} />
      </Routes>
      <Footer />
    </>
  );
};
