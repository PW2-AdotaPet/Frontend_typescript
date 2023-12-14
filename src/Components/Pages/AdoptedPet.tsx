import React, { useState, useEffect } from "react";
import Container from "../Layouts/Container";
import Main from "../Layouts/Main";
import InfoMessage from "../Layouts/InfoMessage";
import SearchBar from "../Layouts/SearchBar";
import Cards from "../Ui/Cards";
import NavBar from "../Layouts/NavBar";

import { useAuth } from "../../Context/AuthContext";

function AdoptedPet() {
  const [data, setData] = useState([]);

  const { token } = useAuth();

  useEffect(() => {

    fetch('http://localhost:8000/api/pets/adopted', {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      }
    })
      .then(response => response.json())
      .then(result => {
        setData(result)})
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <Container>
      <NavBar />
      <Container customClass="column">
        <SearchBar setData={setData} />
        {data.length > 0 ? (
          <Main customClass="scroll">
            <Cards data={data} />
          </Main>
        ) : (
          <InfoMessage message="Adote algum animal" />
        )}
      </Container>
    </Container>
  );
}

export default AdoptedPet;
