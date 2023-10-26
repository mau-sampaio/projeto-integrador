import { useState } from "react";
import { Form } from "react-bootstrap";
import DatePicker, { DateObject } from "react-multi-date-picker";

export function Calendars() {
  const [values, setValues] = useState([]);

  return (
    <DatePicker
      className="w-100"
      value={values}
      onChange={setValues}
      render={(value, openCalendar) => {
        return (
          <Form.Control
            value={value}
            name="texto"
            aria-describedby="basic-addon1"
            placeholder="Check in - Check out"
            onClick={openCalendar}
          />
        );
      }}
      range
      minDate={new DateObject().subtract(0, "days")}
      maxDate={new DateObject().add(10, "days")}
    />
  );
}
