import React, { useEffect } from 'react';
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import TripList from '../TripList/TripList';
import './App.css';
import MyChart from '../MyChart/echarts';
import FamilySize from '../FamilySize/familySize';
import Patients from '../Patients/Patients';



function App() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/login">
            {user.id ? (
              <Redirect to="/user" />
            ) : (
              <LoginPage />
            )}
          </Route>
          <Route exact path="/registration">
            {user.id ? (
              <Redirect to="/user" />
            ) : (
              <RegisterPage />
            )}
          </Route>
          <Route exact path="/home">
            {user.id ? (
              <Redirect to="/user" />
            ) : (
              <LandingPage />
            )}
          </Route>
          <ProtectedRoute exact path="/user" component={UserPage} />
          <ProtectedRoute exact path="/info" component={InfoPage} />
          <ProtectedRoute exact path="/my_trips" component={TripList} />
          <ProtectedRoute exact path="/echarts" component={MyChart} />

          <Route exact path="/family_size">
            <FamilySize />
          </Route>

          <Route exact path="/patients">
            <Patients/>
          </Route> 



          <Route>






            <h1>404 - Page Not Found</h1>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

// import React, { useEffect } from 'react';
// import {
//   HashRouter as Router,
//   Redirect,
//   Route,
//   Switch,
// } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import Nav from '../Nav/Nav';
// import Footer from '../Footer/Footer';
// import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
// import AboutPage from '../AboutPage/AboutPage';
// import UserPage from '../UserPage/UserPage';
// import InfoPage from '../InfoPage/InfoPage';
// import LandingPage from '../LandingPage/LandingPage';
// import LoginPage from '../LoginPage/LoginPage';
// import RegisterPage from '../RegisterPage/RegisterPage';
// import TripList from '../TripList/TripList';
// import './App.css';
// import MyChart from '../MyChart/echarts';
// import FamilySize from '../FamilySize/familySize.jsx';




// function App() {
//   const dispatch = useDispatch();

//   const user = useSelector(store => store.user);

//   useEffect(() => {
//     dispatch({ type: 'FETCH_USER' });
//   }, [dispatch]);

//   return (
//     <Router>
//       <div>
//         <Nav />
//         <Switch>
//           <Redirect exact from="/" to="/home" />

//           <Route exact path="/about" component={AboutPage} />

//           <Route exact path="/login">
//             {user.id ? (
//               <Redirect to="/user" />
//             ) : (
//               <LoginPage />
//             )}
//           </Route>

//           <Route exact path="/registration">
//             {user.id ? (
//               <Redirect to="/user" />
//             ) : (
//               <RegisterPage />
//             )}
//           </Route>

//           <Route exact path="/home">
//             {user.id ? (
//               <Redirect to="/user" />
//             ) : (
//               <LandingPage />
//             )}
//           </Route>

//           <ProtectedRoute exact path="/user" component={UserPage} />

//           <ProtectedRoute exact path="/info" component={InfoPage} />

//           <ProtectedRoute exact path="/my_trips" component={TripList} />

//           <Route exact path="/echarts">
//             <MyChart />

//           </Route>
//           <Route exact path="/family_size">
//             <FamilySize />
//           </Route>




//           <Route>
//             <h1>404 - Page Not Found</h1>
//           </Route>
//         </Switch>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;

