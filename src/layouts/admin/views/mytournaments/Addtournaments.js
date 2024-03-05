import React from "react";
import { useState } from "react";
import "./Addtournaments.css";

const Addtournaments = () => {
  const [error, setError] = useState("");

  const validateDates = (startDate, lastDate) => {
    if (new Date(lastDate) < new Date(startDate)) {
      setError("Last date must be greater than or equal to start date.");
    } else {
      setError("");
      console.log(error)
    }
  };



  const handleStartDateChange = () => {
    const startDate = document.getElementById("sdate").value;
    const lastDate = document.getElementById("ldate").value;
    validateDates(startDate, lastDate);
  };

  const handleLastDateChange = () => {
    const startDate = document.getElementById("sdate").value;
    const lastDate = document.getElementById("ldate").value;
    validateDates(startDate, lastDate);
  };

  return (
    <div className="box_18Atadd">
    <div className="form__group field">
<input
  type="input"
  class="form__field"
  name="name"
  id="name"
  required
/>
<label for="name" class="form__label">
  Tournament Name
</label>
</div>

<div className="form__group field">
<input
  type="input"
  class="form__field"
  placeholder=""
  name="City"
  id="city"
  required
/>
<label for="name" class="form__label">
  City
</label>
</div>

<div class="sap">
<div className="form__group field">
  <input
    type="number"
    class="form__fiel"
    placeholder=""
    name="code"
    id="mcode"
    required
  />
  <label for="name" class="form__label">
    Mobile No.
  </label>
</div>

<div className="form__group field">
  <input
    type="input"
    class="form__fiel"
    placeholder=""
    name="code"
    id="code"
    required
  />
  <label for="name" class="form__label">
    Organiser Name
  </label>
</div>
</div>


<div className="form__group field">
<input
  type="date"
  className="form__fiel"
  placeholder=""
  name="sdate"
  id="sdate"
  required
  onChange={handleStartDateChange}
/>
<label for="name" className="form__label">
  Start Date
</label>
</div>

<div className="form__group field">
<input
  type="date"
  className="form__fiel"
  placeholder=""
  name="ldate"
  id="ldate"
  required
  onChange={handleLastDateChange}
/>
<label for="name" className="form__label">
  Last Date
</label>
</div>
{error && <p className="error">{error}</p>}
<div className="sb">
<button className="submit">Submit</button>
</div>
</div>
  );
};

export default Addtournaments;