import React from "react";
import { NativeBaseProvider } from "native-base";
import TodoList from "./src/pages";
import { Provider } from "react-redux";
import store, { persistor } from "./src/store";
import { PersistGate } from "redux-persist/integration/react";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NativeBaseProvider>
          <TodoList />
        </NativeBaseProvider>
      </PersistGate>
    </Provider>
  );
}
