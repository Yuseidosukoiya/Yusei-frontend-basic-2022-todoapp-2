import React, { createContext, useContext, useState } from "react";

const AlertHandlerContext = createContext();

export const AlertHandlerProvider = ({ children }) => {
  const [alertState, setAlertState] = useState({
    visible: false,
    errorText: "",
  });

  const setAlert = (errorText) => {
    const modifiedAlertState = alertState;
    modifiedAlertState.errorText = errorText;
    modifiedAlertState.visible = true;
    setAlertState[modifiedAlertState];
  };

  const closeAlert = () => {
    const modifiedAlertState = alertState;
    modifiedAlertState.visible = false;
    setAlertState[modifiedAlertState];
  };

  const contextValue = {
    ...alertState,
    setAlert: setAlert,
    closeAlert: closeAlert,
  };

  return (
    <AlertHandlerContext.Provider value={contextValue}>
      {children}
    </AlertHandlerContext.Provider>
  );
};

export const useAlertHandlerContext = () => useContext(AlertHandlerContext);
