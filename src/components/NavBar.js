import styled from "styled-components";
import Image from "next/image";
import LogoS from "../../public/assets/logo-s.svg";
import Typography from "../elements/Typography";

const Container = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
  background-color: #ffffff;
  height: 120px;
  padding: 0 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .top-nav {
    .logo-holder {
      width: fit-content;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

const NavBar = () => {
  return (
    <Container>
      <div className="top-nav">
        <div className="logo-holder">
          <Image src={LogoS} width="40" />
          <Typography
            variant="h1"
            fontSize="18px"
            color="#242424"
            margin="0 10px"
          >
            محصولات پزشکی ترپیا
          </Typography>
        </div>
        <div className="search-field-holder"></div>
      </div>
      <div className="navigation"></div>
    </Container>
  );
};

export default NavBar;
