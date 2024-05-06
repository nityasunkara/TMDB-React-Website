import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './Store/store';
import { Provider } from 'react-redux'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomeContainer from './Containers/HomeContainer';

import MovieDetailsContainer from './Containers/MovieDetailsContainer/MovieDetailsContainer';
import TVSeriesContainer from './Containers/TVSeriesContainer/TVSeriesContainer';
import SeriesDetailsContainer from './Containers/SeriesDetailsContainer/SeriesDetailsContainer';
import PeopleContainer from './Containers/PeopleContainer';
import GalleryContainer from './Containers/GalleryContainer';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/",
        element: <HomeContainer />

      },
      {
        path: "/moviedetails/:id",
        element: <MovieDetailsContainer />
      },
      {
        path: "/tvseries",
        element: <TVSeriesContainer />
      },
      {
        path: "/tvseries/seriesdetails/:id",
        element: <SeriesDetailsContainer />
      },
      {
        path: "/people",
        element: <PeopleContainer />
      },
      {
        path:"/gallery",
        element: <GalleryContainer/>
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
