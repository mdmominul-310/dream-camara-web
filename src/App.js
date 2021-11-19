import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './Pages/Dashboard/Dashbord';
import DashboardHome from './Pages/Dashboard/DashboardHome';
import AddProducts from './Pages/Dashboard/AddProducts';
import ManageProducts from './Pages/Dashboard/ManageProducts';
import AddCaruseItem from './Pages/Dashboard/AddCaruseItem';
import ManageCarusel from './Pages/Dashboard/ManageCarusel';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Login/Register';
import Notfound from './Pages/Notfound/Notfound';
import BuyForm from './Pages/BuyForm/BuyForm';
import Ratings from './Pages/Dashboard/Ratings';
import Shop from './Pages/Shop/Shop';
import AuthContext from './Context/AuthContext';
import PrivateRoute from './hooks/PrivateRoute';
import MakeAdmin from './Pages/Dashboard/MakeAdmin';
import ManageOrders from './Pages/Dashboard/ManageOrders';
import MyOrder from './Pages/Dashboard/MyOrder';
import AdminRoute from './hooks/AdminRoute';
import ContactUs from './Pages/ContactUs/ContactUs';
import AboutUs from './Pages/Aboutus/AboutUs';



function App() {
  return (
    <div className="App">
      <AuthContext>
        <BrowserRouter>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} >
              <Route index element={<DashboardHome />} />
              <Route path="dashboardhome" element={<DashboardHome />} />
              <Route path="manageproducts" element={<AdminRoute><ManageProducts /></AdminRoute>} />
              <Route path="manageorders" element={<AdminRoute><ManageOrders /></AdminRoute>} />
              <Route path="myorder" element={<MyOrder />} />
              <Route path="addproducts" element={<AdminRoute><AddProducts /></AdminRoute>} />
              <Route path="caruselitem" element={<AdminRoute><AddCaruseItem /></AdminRoute>} />
              <Route path="managecarusel" element={<AdminRoute><ManageCarusel /></AdminRoute>} />
              <Route path="ratings" element={<Ratings />} />
              <Route path="makeadmin" element={<AdminRoute><MakeAdmin /></AdminRoute>} />
            </Route>
            <Route path="buynow/:id" element={<PrivateRoute> <BuyForm></BuyForm> </PrivateRoute>}>
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Notfound />} />
          </Routes>

        </BrowserRouter>
      </AuthContext>
    </div>
  );
}

export default App;
