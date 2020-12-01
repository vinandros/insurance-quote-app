import React from "react";
import styled from "@emotion/styled";
import { firstLetterUpperCase } from "../helpers/insuranceLogic.js";
import PropTypes from "prop-types";
const SummaryContainer = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #00838f;
  color: #fff;
  margin-top: 1rem;
`;

const Summary = ({ formData }) => {
  const { plan, brand, year } = formData;
  if (brand.trim() === "" || year.trim() === "" || plan.trim() === "") {
    return null;
  }
  return (
    <SummaryContainer>
      <h2> Insurance quote summary</h2>
      <ul>
        <li>Brand: {firstLetterUpperCase(brand)}</li>
        <li>Year: {year}</li>
        <li>Plan: {firstLetterUpperCase(plan)}</li>
      </ul>
    </SummaryContainer>
  );
};

Summary.propTypes = {
  formData: PropTypes.object.isRequired,
};

export default Summary;
