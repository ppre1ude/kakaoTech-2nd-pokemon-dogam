import { useParams, useNavigate } from "react-router-dom";
import { usePokemon } from "../context/PokemonContext";
import MOCK_DATA from "../mock";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  text-align: center;
`;

const Image = styled.img`
  width: 120px;
  margin-bottom: 12px;
`;

const Name = styled.h2`
  font-size: 24px;
  color: #e53935;
`;

const Type = styled.p`
  font-size: 16px;
  color: #555;
`;

const Description = styled.p`
  font-size: 14px;
  color: #444;
  margin-top: 8px;
`;

const Button = styled.button`
  margin-top: 16px;
  padding: 8px 16px;
  background-color: ${(props) => (props.delete ? "#757575" : "#ff3b3b")};
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.delete ? "#616161" : "#e53935")};
  }
`;

function PokemonDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { selected, addPokemon, removePokemon } = usePokemon();

  const pokemon = MOCK_DATA.find((p) => p.id === Number(id));
  const isSelected = selected.some((p) => p.id === pokemon?.id);

  if (!pokemon) return <p>포켓몬을 찾을 수 없습니다.</p>;

  const handleClick = () => {
    if (isSelected) {
      removePokemon(pokemon.id);
    } else {
      addPokemon(pokemon);
    }
  };

  return (
    <Container>
      <Image src={pokemon.img_url} alt={pokemon.korean_name} />
      <Name>{pokemon.korean_name}</Name>
      <Type>타입: {pokemon.types.join(", ")}</Type>
      <Description>{pokemon.description}</Description>
      <Button onClick={handleClick} delete={isSelected}>
        {isSelected ? "삭제" : "추가"}
      </Button>
      <br />
      <Button
        onClick={() => navigate(-1)}
        style={{ backgroundColor: "#333", marginTop: "12px" }}
      >
        뒤로 가기
      </Button>
    </Container>
  );
}

export default PokemonDetail;
