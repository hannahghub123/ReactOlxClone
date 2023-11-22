import React from 'react';
import App from './App';
import { FirebaseContext } from './Store/Context';
import firebase from './Firebase/config';
import Context from './Store/Context';
import { createRoot } from "react-dom/client";



const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
    <FirebaseContext.Provider value={{ firebase }}>
      <Context> {/* This wraps the App component */}
        <App />
      </Context>
    </FirebaseContext.Provider>,
  );
  