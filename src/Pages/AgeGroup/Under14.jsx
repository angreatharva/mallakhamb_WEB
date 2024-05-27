import React, { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import Alert from "@mui/material/Alert";

function Under14({ setTeamData14, teamData14 }) {
  const handleClick = (data) => {
    console.log(data.length);
    if (data.length < 6) {
      setTeamData14([...data, { Name: "", Dob: "", Age: "" }]);
    }
  };

  const handleInputChange = (index, value, field) => {
    const newData = [...teamData14]; // Create a copy of the original array
    newData[index][field] = value; // Update the value of the corresponding object
    setTeamData14(newData);
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
      {teamData14?.map((data, index) => (
        <div className="row mt-2">
          <div className="col">
            <input
              type="text"
              value={data?.Name}
              //   {...register("Name" + index)}
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
              value={data?.Dob}
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
              value={data?.Age}
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
          onClick={() => handleClick(teamData14)}
        >
          +Add
        </button>
      </div>
      {teamData14.length >= 6 && (
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

export default Under14;
