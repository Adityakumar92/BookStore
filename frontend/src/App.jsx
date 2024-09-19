import React, {useEffect} from 'react'
import { Home, AllBooks, LogIn, SignUp, Cart, Profile, AllOrders, AddBook, UpdateBook } from './pages'
import { Favourites, Footer, Navbar, Settings, UserOrderHistory, ViewBookDetails } from './components'
import { Routes, Route } from "react-router-dom";
import { authActions } from './store/auth';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const role = useSelector((state) => state.auth.role);
  useEffect(()=>{
    if(
      localStorage.getItem("id") &&
      localStorage.getItem("token") &&
      localStorage.getItem("role")
    ){
      dispatch(authActions.login());
      dispatch(authActions.changeRole(localStorage.getItem("role")));
    }
  }, []);

  return (
    <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/all-books" element={<AllBooks />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} >
            {role==="user" ? <Route index element={<Favourites />} /> : <Route index element={<AllOrders />} />}
            {role ==="admin" && (<Route path="/profile/add-book" element={<AddBook />} />)}
            <Route path="/profile/orderHistory" element={<UserOrderHistory />} />
            <Route path="/profile/settings" element={<Settings />} />
          </Route>
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/updateBook/:id" element={<UpdateBook />} />
          <Route path="/view-book-details/:id" element={<ViewBookDetails />} />
        </Routes>
        <Footer />
    </div>
  )
}

export default App
