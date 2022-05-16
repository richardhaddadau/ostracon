import React, { createContext } from "react";

const SessionContent = createContext({});

export const sessionReducer = (state, action) => {
  console.log(action.type);

  const contextObj = {
    login: { user: action.data.user },
    register: { user: action.data.user },
    logout: null,
  };

  if (contextObj[action.type]) {
    return contextObj[action.type];
  } else {
    throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export const SessionProvider = SessionContent.Provider;
export const SessionConsumer = SessionContent.Consumer;
export default SessionContent;
