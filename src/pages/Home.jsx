import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import pokemonLogo from "../assets/pokemon-logo.png";

const Container = styled.div`
  background-color: #3366aa;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  width: 300px;
  margin-bottom: 30px;
`;

const StartButton = styled.button`
  background-color: #e53935;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: #d32f2f;
  }
`;

const Description = styled.p`
  color: white;
  font-weight: 400;
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
`;

function Home() {
  const navigate = useNavigate();

  return (
    <Container>
      <Logo src={pokemonLogo} alt="Pokemon Logo" />
      <Description>
        카카오테크캠퍼스 FE 2차 과제 / 전남대학교 최재원
      </Description>
      <StartButton onClick={() => navigate("/dex")}>
        포켓몬 도감 펼치기
      </StartButton>
    </Container>
  );
}

export default Home;
