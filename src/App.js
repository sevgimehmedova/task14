import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Registration from './components/Registration';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import CarList from './components/CarList';
import AddCar from './components/AddCar';
import CarDetails from './components/CarDetails';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(/* Implement your authentication check here */);

  return (
    <div>
      <Switch>
        <Route path="/register" component={Registration} />
        <Route path="/login" component={() => <Login setIsAuthenticated={setIsAuthenticated} />} />
        <PrivateRoute
          path="/dashboard"
          component={Dashboard}
          isAuthenticated={isAuthenticated}
        />
        <PrivateRoute
          path="/car/list"
          component={CarList}
          isAuthenticated={isAuthenticated}
        />
        <PrivateRoute
          path="/car/add"
          component={AddCar}
          isAuthenticated={isAuthenticated}
        />
        <PrivateRoute
          path="/car/:carId"
          component={CarDetails}
          isAuthenticated={isAuthenticated}
        />
        {/* Add other routes as needed */}
      </Switch>
    </div>
  );
};

export default App;
