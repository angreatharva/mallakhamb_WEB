import React, { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import Alert from "@mui/material/Alert";

function Under12({ setTeamData12 }) {
  const [recordList, setRecordList] = useState([
    { Name: "", Dob: "", Age: "" },
  ]);

  const handleClick = (data) => {
    if (data.length < 6) {
      setRecordList((prev) => [...prev, { Name: "", Dob: "", Age: "" }]);
    }
  };

  useMemo(
    () => setTeamData12((prev) => ({ ...prev, under12: recordList })),
    [recordList]
  );
  const handleInputChange = (index, value, field) => {
    const newData = [...recordList];
    newData[index][field] = value;
    setRecordList(newData);
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
      {recordList?.map((data, index) => (
        <div className="row mt-2">
          <div className="col">
            <input
              type="text"
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
          onClick={() => handleClick(recordList)}
        >
          +Add
        </button>
      </div>
      {recordList.length >= 6 && (
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
