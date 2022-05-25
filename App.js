import React from "react";
import Main from "./components/MainComponent";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/configureStore";
import { PersistGate } from "redux-persist/es/integration/react";
import Loading from "./components/LoadingComponent";

const { persistor, store } = ConfigureStore();

export default function App() {
  return (
    <Provider store={store}>
      {/* store in the import and the {store} is the same thing. Left store is the syntax */}
      <PersistGate Loading={<Loading />} persistor={persistor}>
        <Main />
      </PersistGate>
    </Provider>
  );
}
