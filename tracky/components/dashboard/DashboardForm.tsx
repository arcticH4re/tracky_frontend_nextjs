import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";

function DashboardForm() {
  const [input, setInput] = useState("");

  function inputHandler(evt) {
    setInput(evt.target.value);
  }

  return (
    <Form>
      <fieldset className="mt-5">
        <Form.Group className="mb-3">
          <Form.Label>Input</Form.Label>
          <Form.Control
            onChange={inputHandler}
            id="TextInput"
            placeholder="input"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Select</Form.Label>
          <Form.Select aria-label="Select Type">
            <option>Select Type</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" min="2022-01-01" max="2022-12-31" />
        </Form.Group>
        <Form.Group className="mb-3"></Form.Group>
        <Button variant="dark" type="submit">
          Add
        </Button>
        <div>
          <p>{input}</p>
        </div>
      </fieldset>
    </Form>
  );
}

export default DashboardForm;
