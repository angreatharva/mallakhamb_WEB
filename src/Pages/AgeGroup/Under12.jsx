import React, { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import Alert from "@mui/material/Alert";

function Under12({ setTeamData12, teamData12 }) {
  const handleClick = (data) => {
    console.log(data.length);
    if (data.length < 6) {
      setTeamData12([...data, { Name: "", Dob: "", Age: "" }]);
    }
  };

  const handleInputChange = (index, value, field) => {
    const newData = [...teamData12]; // Create a copy of the original array
    newData[index][field] = value; // Update the value of the corresponding object
    setTeamData12(newData);
  };

  return (
    <div>
      <div className="row">
        <div className="col">
          <label>Name</label>
        </div>
        <div className="col">
          <label>D.O.B</label>
        </div>
        <div className="col">
          <label>Age</label>
        </div>
      </div>
      {teamData12?.map((data, index) => (
        <div className="row mt-2">
          <div className="col">
            <input
              type="text"
              value={data?.Name}
              className="form-control"
              name="Name"
              onChange={(event) =>
                handleInputChange(index, event.target.value, "Name")
              }
            />
          </div>
          <div className="col">
            <input
              type="text"
              value={data?.Age}
              className="form-control"
              name="DOB"
              onChange={(event) =>
                handleInputChange(index, event.target.value, "Dob")
              }
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              name="Age"
              onChange={(event) =>
                handleInputChange(index, event.target.value, "Age")
              }
            />
          </div>
        </div>
      ))}
      <div className="mt-2 d-flex justify-content-end">
        <button
          type="button"
          class="btn btn-outline-success"
          onClick={() => handleClick(teamData12)}
        >
          +Add
        </button>
      </div>
      {teamData12.length >= 6 && (
        <Alert
          variant="outlined"
          severity="warning"
          style={{ marginTop: "10px" }}
        >
          Maximum 6 Players allowed.
        </Alert>
      )}
    </div>
  );
}

export default Under12;
