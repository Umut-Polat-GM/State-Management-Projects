import React, { useEffect } from "react";
import "./App.css";
import Auth from "./components/Auth";
import { useDispatch, useSelector } from "react-redux";
import Layout from "./components/Layout";
import Notification from "./components/Notification";
import { fetchData, sendCardData } from "./store/card-actions";
let isFirstRender = true;

function App() {
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);

  const card = useSelector((state) => state.card);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(()=>{
    dispatch(fetchData())
  },[dispatch])
  useEffect(() => {
    if (isFirstRender) {
      isFirstRender = false;
      return;
    }
    if(card.changed){
      dispatch(sendCardData(card))
    }
  }, [card, dispatch]);
  return (
    <div className="App">
      {notification && (
        <Notification type={notification.type} message={notification.message} />
      )}
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  );
}

export default App;
