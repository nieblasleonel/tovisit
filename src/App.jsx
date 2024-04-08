
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RootLayout } from './pages/Root';
import { ErrorPage } from './pages/Error';

import { HomePage } from './pages/Home';
import { EventDetailPage, loader as eventDetailLoader, action as deleteEventAction } from './pages/EventDetail';
import { NewEventPage } from './pages/NewEvent';
import { EditEventPage } from './pages/EditEvent';
import { EventsRootLayout } from './pages/EventsRoot';
import { EventsPage } from './pages/Events.jsx';
import { loader as eventLoader } from './pages/Events';
import {action as manipulatedEventAction} from './components/EventForm'
import { NewsletterPage, action as newsletterAction} from './pages/Newsletter';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'events', element: <EventsRootLayout />,
        children: [
          { index: true, element: <EventsPage />, loader: eventLoader },
          {
            path: ':eventId',
            id:'event-detail',
            loader: eventDetailLoader, 
            children: [
              { index: true, element: <EventDetailPage />, action: deleteEventAction },
              { path: 'edit', element: <EditEventPage />, action: manipulatedEventAction},
            ]
          },
          { path: 'new', element: <NewEventPage />, action: manipulatedEventAction },
          { path: 'newsletter', element: <NewsletterPage />, action: newsletterAction },
        ]
      },
    ]
  },
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
