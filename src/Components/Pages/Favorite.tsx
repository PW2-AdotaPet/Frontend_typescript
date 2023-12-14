import Container from "../Layouts/Container";
import Main from "../Layouts/Main";
import Cards from "../Ui/Cards";
import NavBar from "../Layouts/NavBar";
import InfoMessage from "../Layouts/InfoMessage";

import { useState, useEffect } from "react";

import { useAuth } from "../../Context/AuthContext";

interface FavoritePetData {
  profile: { favorite_pets: [] };
}

function Favorite() {
  const [data, setData] = useState<FavoritePetData | null>(null);

  const { token } = useAuth();

  useEffect(() => {
    fetch("http://localhost:8000/api/users/me", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        setData(result);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <Container>
      <NavBar />
      <Container customClass="column">
        <Main customClass="scroll">
          {data?.profile.favorite_pets ? data.profile.favorite_pets.length > 0 ? (
            <Cards data={data?.profile.favorite_pets} />
          ) : (
            <InfoMessage message="Nenhum pet ainda foi adicionado à lista!" />
          ) : null}
        </Main>
      </Container>
    </Container>
  );
}

export default Favorite;
