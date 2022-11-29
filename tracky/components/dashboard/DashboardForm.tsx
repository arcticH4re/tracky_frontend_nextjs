import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";

function DashboardForm(props) {
  const [input, setInput] = useState("");
  const [metricInput, setMetricInput] = useState("");
  const [dateInput, setDateInput] = useState("");

  function inputHandler(event) {
    setInput(event.target.value);
  }

  function metricInputHandler(event) {
    setMetricInput(event.target.value);
  }

  function dateInputHandler(event) {
    setDateInput(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();

    const formData = {
      amount: input,
      metric: metricInput,
      date: new Date(dateInput),
    };

    props.onSubmitData(formData);
    setInput("");
    setMetricInput("");
    setDateInput("");
  }

  return (
    <Form onSubmit={submitHandler} className="w-40 mt-28">
      <fieldset className="mt-5">
        <Form.Group className="mb-3">
          <Form.Label>Type</Form.Label>
          <Form.Select
            aria-label="Select Type"
            onChange={metricInputHandler}
            value={metricInput}
          >
            <option>Select</option>
            <option value="Warm Water">Warm Water</option>
            <option value="Cold Water">Cold Water</option>
            <option value="Heating">Heating</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            min="2022-01-01"
            max="2022-12-31"
            onChange={dateInputHandler}
            value={dateInput}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Add Amount</Form.Label>
          <Form.Control
            onChange={inputHandler}
            id="NumberInput"
            value={input}
          />
        </Form.Group>
        <Form.Group className="mb-3"></Form.Group>
        <Button variant="dark" type="submit">
          Add
        </Button>
      </fieldset>
    </Form>
  );
}

export default DashboardForm;
