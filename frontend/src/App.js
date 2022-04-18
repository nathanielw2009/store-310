import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

import Home from './components/home';
import CreateUser from './components/createuser';
import ReadUser from './components/readuser';
import UpdateUser from './components/updateuser';
import CreateCategory from './components/createcategory';
import ReadCategory from './components/readcategory';
import UpdateCategory from './components/updatecategory';
import Checkout from './components/checkout';
import CreatePickupLocation from './components/createpickuplocation';
import ReadPickupLocation from './components/readpickuplocation';
import ReadPickups from './components/readpickups';
import UpdatePickupLocation from './components/updatepickuplocation';
import UpdatePickups from './components/updatepickups';
import CreatePickups from './components/createpickups';
function App() {
  return (
    <Router>
      <div>
        
        <Link to='/createcategory'>
          <Button>Create Category</Button>
        </Link>

        <Link to='/readcategory'>
          <Button>View Category</Button>
        </Link>

        <Link to='/createuser'>
          <Button>Create User</Button>
        </Link>

        <Link to='/createpickuplocation'>
          <Button>Create Pickup Location</Button>
        </Link>

        <Link to='/readpickuplocation'>
          <Button>View Pickup Location</Button>
        </Link>

        <Link to='/readuser'>
          <Button>View User</Button>
        </Link>

        <Link to='/checkout'>
          <Button>CheckoutPage</Button>
        </Link>

        

        <Link to='/createpickups'>
          <Button>Create Pickups</Button>
        </Link>
        <Link to='/readpickups'>
          <Button>View Pickups</Button>
        </Link>
      

        <div>
          <Route exact path='/' component={Home} />

          <Route exact path='/createuser' component={CreateUser} />
          <Route exact path='/readuser' component={ReadUser} />
          <Route exact path='/updateuser' component={UpdateUser} />

          <Route exact path='/createcategory' component={CreateCategory} />
          <Route exact path='/readcategory' component={ReadCategory} />
          <Route exact path='/readpickuplocation' component={ReadPickupLocation} />
          <Route exact path='/updatecategory' component={UpdateCategory} />
          <Route exact path='/checkout' component={Checkout} />
          <Route exact path='/createpickuplocation' component={CreatePickupLocation} />
          <Route exact path='/readpickups' component={ReadPickups} />
          <Route exact path='/updatepickuplocation' component={UpdatePickupLocation} />
          <Route exact path='/updatepickups' component={UpdatePickups} />
          <Route exact path='/createpickups' component={CreatePickups} />
          
        </div>

      </div>
    </Router>
  );
}

export default App;