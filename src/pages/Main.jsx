import { StyledMain } from "./Main.styled";
import Sidebar from "../components/layout/sidebar/Sidebar-v1";
import Navbar from "../components/layout/nav/Navbar";
import AppBody from "../components/layout/appBody/AppBody";
import { useSelector } from "react-redux";
import Modal from "../components/universal/Modal-v2";
import MainLogo from "../components/universal/MainLogo";
// import { useEffect, useState } from "react";

function Main() {
  const isSidebarHidden = useSelector((store) => store.boards.isSidebarHidden);
  // const [isMainExpanded, setIsMainExpanded] = useState(false);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsMainExpanded(isSidebarHidden);
  //   }, 250);
  // }, [isSidebarHidden]);
  return (
    <StyledMain $isItHidden={isSidebarHidden}>
      <MainLogo />
      <Navbar />
      <Sidebar />
      <AppBody />
      <Modal>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime,
          reiciendis obcaecati laboriosam eaque vel odio doloremque? Illum
          maiores fugit accusamus inventore molestias debitis, expedita, id
          dolorem recusandae, praesentium beatae perferendis? Lorem ipsum dolor
          sit amet consectetur, adipisicing elit. Nam non laboriosam velit
          voluptatibus. Veniam non dolorum nulla? Maiores, officia, minus rem
          adipisci distinctio molestiae soluta mollitia libero tempore voluptate
          corporis. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Qui excepturi omnis amet eum! Quae ut vero accusamus quod minus,
          inventore illum consectetur repudiandae adipisci consequatur sint
          natus maxime iusto sequi?
        </p>
      </Modal>
    </StyledMain>
  );
}

export default Main;
