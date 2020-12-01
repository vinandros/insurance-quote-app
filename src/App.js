import React from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Result from "./components/Result";
import Summary from "./components/Summary";
import Spinner from "./components/spinner/Spinner";
import styled from "@emotion/styled";

const AppContainer = styled.div`
  margin: 0 auto;
  max-width: 600px;
`;

const FormContainer = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

function App() {
  const [summary, setSummary] = React.useState({
    ensuranceFinalCost: 0,
    formData: {
      brand: "",
      year: "",
      plan: "",
    },
  });
  const [loading, setLoading] = React.useState(false);

  const { formData } = summary;
  const { ensuranceFinalCost } = summary;
  return (
    <AppContainer>
      <Header title={"Insurance Quote"} />
      <FormContainer>
        <Form setSummary={setSummary} setLoading={setLoading} />
        {loading && <Spinner />}
        {!loading && <Summary formData={formData} />}
        {!loading && (
          <Result ensuranceFinalCost={parseFloat(ensuranceFinalCost)} />
        )}
      </FormContainer>
    </AppContainer>
  );
}

export default App;
