import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function DashboardForm() {
  return (
    <Form>
      <fieldset className="mt-5">
        <Form.Group className="mb-3">
          <Form.Label>Input</Form.Label>
          <Form.Control id="TextInput" placeholder="input" />
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
        <Form.Group className="mb-3"></Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </fieldset>
    </Form>
  );
}

export default DashboardForm;
