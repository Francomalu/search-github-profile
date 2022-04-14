import React, { useEffect, useState } from "react";
import { Container, Divider, Text } from "@chakra-ui/react";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import axios from "axios";
import { UserProvider } from "./context/Usercontext";
import Projects from "./components/Projects";

function App() {
  const [data, setData] = useState([]);
  const [projects, setProjects] = useState([]);
  const [user, setUser] = useState("Francomalu");
  const [error, setError] = useState("");

  async function getData(userChar) {
    const responseData = await axios.get(
      `https://api.github.com/users/${userChar}`
    );
    return responseData;
  }

  async function getProjects(userChar) {
    const responseProjects = await axios.get(
      `https://api.github.com/users/${userChar}/repos`
    );
    return responseProjects;
  }

  useEffect(() => {
    getData(user).then(
      (data) => {
        setData(data.data);
        setError("");
      },
      (error) => setError(error)
    );
    getProjects(user).then(
      (projects) => {
        setProjects(projects.data);
        setError("");
      },
      (error) => setError(error)
    );
  }, [user]);

  function callbackCharacter(characters) {
    if (characters) setUser(characters);
  }

  return (
    <Container maxW={"container.xl"} centerContent>
      <UserProvider value={{ data: data, projects: projects }}>
        <Navbar characters={callbackCharacter} />
        {error ? (
          <Text color="gray.200">No se han encontrado respositorios</Text>
        ) : (
          <>
            <Main />
            <Divider orientation="horizontal" m={4} w="70%" />
            <Projects />
          </>
        )}
      </UserProvider>
    </Container>
  );
}

export default App;
