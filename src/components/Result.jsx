import React from "react";
import styled from "@emotion/styled";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";

const ResultContainer = styled.div`
  text-align: center;
  padding: 0.5rem;
  border: 1px solid #26c6da;
  background-color: rgb(127, 224, 237);
  margin-top: 1rem;
  position: relative;
`;

const Msg = styled.p`
  background-color: rgb(127, 224, 237);
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
`;

const FinalCost = styled.p`
  color: #00838f;
  padding: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
`;

const Result = ({ ensuranceFinalCost }) => {
  const nodeRef = React.useRef(null);
  return ensuranceFinalCost === 0 ? (
    <Msg>Choose brand, year and ensurance plan.</Msg>
  ) : (
    <ResultContainer>
      <TransitionGroup component="div" className="resultado">
        <CSSTransition
          nodeRef={nodeRef}
          classNames="resultado"
          key={ensuranceFinalCost}
          timeout={{ enter: 500, exit: 500 }}
        >
          <div ref={nodeRef}>
            <FinalCost>Final cost: ${ensuranceFinalCost}</FinalCost>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </ResultContainer>
  );
};
Result.propTypes = {
  ensuranceFinalCost: PropTypes.number.isRequired,
};

export default Result;
