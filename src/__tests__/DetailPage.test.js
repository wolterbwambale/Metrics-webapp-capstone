import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../components/Redux/store';
import DetailsPage from '../components/pages/DetailsPage';

test('DetailsPage matches snapshot', () => {
  const { container } = render(
    <Provider store={store}>
      <Router>
        <DetailsPage />
      </Router>
    </Provider>,
  );
  expect(container).toMatchSnapshot();
});
