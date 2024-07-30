import Main from "./pages/Main";
import GlobalStyles from "./components/universal/GlobalStyles";
import NoData from "./pages/NoData";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      {store.getState().boards.boards.length === 0 ? (
        <NoData
          text="There are no boards available. Create a new board to get started"
          btnText="Add New Board"
        />
      ) : (
        <Main />
      )}
    </Provider>
  );
}

export default App;
