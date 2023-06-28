import React, { useState } from "react";
import Container from "./Container";
import Form from "./Form";
import Legend from "./Form/Legend";


function App() {
  const [resultToYen, setResultToYen] = useState(0);
  const [resultToZłoty, setResultToZłoty] = useState(0);

  const roundResultToYen = resultToYen.toFixed(2)
  const roundResultToZłoty = resultToZłoty.toFixed(2)

  return (

    <Container>
      <Form
        setResultToYen={setResultToYen}
        roundResultToYen={roundResultToYen}
        setResultToZłoty={setResultToZłoty}
        roundResultToZłoty={roundResultToZłoty}
      />
    </Container>
  );
}

export default App;
