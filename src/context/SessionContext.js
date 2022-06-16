import React, { createContext } from "react";

const SessionContext = createContext({});

export const SessionContextProvider = SessionContext.Provider;
export const SessionContextConsumer = SessionContext.Consumer;
export default SessionContext;
