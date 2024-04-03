
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RootLayout } from './pages/Root';
import { ErrorPage } from './pages/Error';

import { HomePage } from './pages/Home';
import { EventsPage } from './pages/Events';
import { EventDetailPage } from './pages/EventDetail';
import { NewEventPage } from './pages/NewEvent';
import { EditEventPage } from './pages/EditEvent';
import { EventsRootLayout } from './pages/EventsRoot';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'events', element: <EventsRootLayout />,
        children: [
          { path: '', element: <EventsPage /> },
          { path: ':eventId', element: <EventDetailPage /> },
          { path: 'new', element: <NewEventPage /> },
          { path: ':eventId/edit', element: <EditEventPage /> },
        ]
      },
    ]
  },

])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
