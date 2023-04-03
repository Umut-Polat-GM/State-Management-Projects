import { cardActions } from "./card-slice";
import { uiActions } from "./ui-slice";

export const fetchData = () => {
  return async (dispatch) => {
    const fetchHandler = async () => {
      const res = await fetch(
        "https://redux-http-61ff6-default-rtdb.firebaseio.com/cardItems.json"
      );
      const data = await res.json();
      return data;
    };

    try {
      const cardData = await fetchHandler();
      dispatch(cardActions.replaceData(cardData));
    } catch (err) {
      dispatch(
        uiActions.showNotification({
          open: true,
          message: "Sent Request Failed",
          type: "error",
        })
      );
    }
  };
};

export const sendCardData = (card) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        open: true,
        message: "Sending Request",
        type: "warning",
      })
    );
    try {
      const sendRequest = async () => {
        //Send state as Sending request

        const res = await fetch(
          "https://redux-http-61ff6-default-rtdb.firebaseio.com/cardItems.json",
          {
            method: "PUT",
            body: JSON.stringify(card),
          }
        );
        const data = await res.json();
        //Send state as Request is succesful
        dispatch(
          uiActions.showNotification({
            open: true,
            message: "Sent Request To Datanase Success",
            type: "success",
          })
        );
      };
      await sendRequest();
    } catch (err) {
      dispatch(
        uiActions.showNotification({
          open: true,
          message: "Sent Request Failed",
          type: "error",
        })
      );
    }
  };
};
