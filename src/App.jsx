import MainPage from "./pages/MainPage";
import GlobalStyles from "./components/universal/GlobalStyles";
import NoBoardsPage from "./pages/NoBoardsPage";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <MainPage />
      {/* <NoBoardsPage /> */}
    </Provider>
  );
}

export default App;
