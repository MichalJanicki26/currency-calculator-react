import Container from "./Container";
import Form from "./Form";
import Legend from "./Legend";
import FormParagraph from "./FormParagraph"

function App() {
  return (
    <Container>
      <Form
        legend=
        {<Legend />}
        paragraph=
        {<FormParagraph
        
        />}
      />
    </Container>
  );
}

export default App;
