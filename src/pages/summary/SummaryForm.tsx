import React, { useState } from "react";
import { Form, Button, Popover, OverlayTrigger } from "react-bootstrap";

const popover = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">Popover right</Popover.Title>
    <Popover.Content>no ice cream will actualy be delivered</Popover.Content>
  </Popover>
);

export default function SummaryForm() {
  const [tcChecked, setTcChecked] = useState(false);

  const checkboxLabel = (
    <span>
      I agree to <span style={{ color: "blue" }}> Terms and Conditions</span>
    </span>
  );

  return (
    <Form>
      <OverlayTrigger placement="right" overlay={popover}>
        <Form.Group controlId="terms-and-conditions">
          <Form.Check
            role="checkbox"
            type="checkbox"
            checked={tcChecked}
            onChange={(e) => setTcChecked(e.target.checked)}
            label={checkboxLabel}
          />
        </Form.Group>
      </OverlayTrigger>
      <Button
        role="button"
        variant="primary"
        type="submit"
        disabled={!tcChecked}
      >
        Confirm order
      </Button>
    </Form>
  );
}
