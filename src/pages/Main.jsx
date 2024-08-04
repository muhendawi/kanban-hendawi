import { StyledMain } from "./Main.styled";
import Sidebar from "../components/layout/sidebar/Sidebar-v1";
import Navbar from "../components/layout/nav/Navbar";
import AppBody from "../components/layout/appBody/AppBody";
import { useSelector } from "react-redux";
import MainLogo from "../components/universal/MainLogo";

function Main() {
  const boardsSlice = useSelector((store) => store.boards);
  // const [isMainExpanded, setIsMainExpanded] = useState(false);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsMainExpanded(isSidebarHidden);
  //   }, 250);
  // }, [isSidebarHidden]);
  return (
    <StyledMain $isSidebarHidden={boardsSlice.isSidebarHidden}>
      <MainLogo />
      <Navbar />
      <Sidebar />
      <AppBody />
      {/* <Modal>
        {boardsSlice.isNewTaskModalOpen && <NewTaskModal />}
        {boardsSlice.isNewBoardModalOpen && <NewBoardModal />}
      </Modal> */}
    </StyledMain>
  );
}

export default Main;
