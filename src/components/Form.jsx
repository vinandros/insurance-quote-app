import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

import {
  getYearGap,
  calcAmountToPayByBrand,
  getInsurancePlan,
} from "../helpers/insuranceLogic";

const Field = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;

const Label = styled.label`
  flex: 0 0 100px;
`;

const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid#e1e1e1;
  -webkit-appearance: none;
`;

const InputRadio = styled.input`
  margin: 0 1rem;
`;

const Buttom = styled.button`
  background-color: #00838f;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  transition: background-color 0.3s;
  margin-top: 2rem;
  &:hover {
    cursor: pointer;
    background-color: #26c6da;
  }
`;

const Error = styled.div`
  background-color: red;
  color: white;
  padding: 1rem;
  text-align: center;
  margin-bottom: 2rem;
  font-weight: bold;
`;

const Form = ({ setSummary, setLoading }) => {
  const [formData, setFormData] = React.useState({
    brand: "",
    year: "",
    plan: "",
  });
  const [error, setError] = React.useState(false);
  const { brand, year, plan } = formData;
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (brand.trim() === "" || year.trim() === "" || plan.trim() === "") {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
      return;
    }

    const ensuranceBaseCost = 2000;
    let ensuranceFinalCost;

    const yearGap = getYearGap(parseInt(year));

    ensuranceFinalCost =
      ensuranceBaseCost - (yearGap * 3 * ensuranceBaseCost) / 100;
    ensuranceFinalCost = calcAmountToPayByBrand(brand) * ensuranceFinalCost;

    const planPercet = getInsurancePlan(plan);
    ensuranceFinalCost = parseFloat(planPercet * ensuranceFinalCost).toFixed(2);

    setLoading(true);
    setTimeout(() => {
      setSummary({
        ensuranceFinalCost,
        formData,
      });
      setLoading(false);
      e.target.reset();
    }, 3000);
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <Error>Every field is required</Error>}
      <Field>
        <Label htmlFor="brand">Brand</Label>
        <Select name="brand" id="brand" value={brand} onChange={handleChange}>
          <option value="">-- Seleccione --</option>
          <option value="American">American</option>
          <option value="European">European</option>
          <option value="Asian">Asian</option>
        </Select>
      </Field>

      <Field>
        <Label htmlFor="year">Year</Label>
        <Select name="year" id="year" value={year} onChange={handleChange}>
          <option value="">-- Seleccione --</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </Select>
      </Field>

      <Field>
        <Label htmlFor="plan">Plan</Label>
        <InputRadio
          type="radio"
          name="plan"
          id="plan"
          value="basic"
          checked={plan === "basic"}
          onChange={handleChange}
        />
        Basic
        <InputRadio
          type="radio"
          name="plan"
          id="plan"
          value="premium"
          checked={plan === "premium"}
          onChange={handleChange}
        />
        Premium
      </Field>

      <Buttom type="submit">Quote</Buttom>
    </form>
  );
};

Form.propTypes = {
  setSummary: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
};

export default Form;
