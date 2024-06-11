import React, { useMemo, useReducer, useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import TabContext from "@mui/lab/TabContext";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import TabPanel from "@mui/lab/TabPanel";
import { useFormik } from "formik";
import * as Yup from "yup";
import Under12 from "./AgeGroup/Under12";
import Under14 from "./AgeGroup/Under14";
import Under18 from "./AgeGroup/Under18";
import Above18 from "./AgeGroup/Above18";
import { useForm } from "react-hook-form";
import { insertData } from "./service";

function reducer(state, action) {
  if ((action.type = "under12")) {
    return {
      ...state,
      teamData12: action.data,
    };
  } else if ((action.type = "under14")) {
    return {
      ...state,
      teamData14: action.data,
    };
  }
  //.. same create for the other ages
}

const Registration = () => {
  const [value, setValue] = useState(0);

  const [teamData12, setteamData12] = useState([
    { Name: "", Dob: "", Age: "" },
  ]);
  const [teamData14, setteamData14] = useState([
    { Name: "", Dob: "", Age: "" },
  ]);
  const [teamData18, setteamData18] = useState([
    { Name: "", Dob: "", Age: "" },
  ]);
  const [teamDataA18, setteamDataA18] = useState([
    { Name: "", Dob: "", Age: "" },
  ]);
  const [state, dispatch] = useReducer(reducer, {
    teamData12: [{ Name: "", Dob: "", Age: "" }], // same create initial state for all other age group. Using reducer bcoz it is cleaner.
    teamData14: [{ Name: "", Dob: "", Age: "" }], // same create initial state for all other age group. Using reducer bcoz it is cleaner.
  });
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const formik = useFormik({
    initialValues: {
      teamName: "",
      coachName: "",
      contactNo: "",
      emailAddress: "",
      gender: "female",
      under12: [],
      under14: [],
      under18: [],
      above18: [],
    },
    validationSchema: Yup.object().shape({
      teamName: Yup.string().required("Required"),
      coachName: Yup.string().required("Required"),
      contactNo: Yup.number().required("Required"),
      emailAddress: Yup.string().email("Invalid email").required("Required"),
    }),
  });
  useMemo(() => console.log(formik.errors), [formik.errors]);
  return (
    <>
      <div className="outerDiv">
        <div className="innerDiv">
          <div className="Header">
            <div>
              <label>Mallakhamb Competition</label>
            </div>
            <div>
              <label>Bhausaheb Navodit</label>
            </div>
          </div>
          <div className="Form">
            <div
              className="row row-cols-4"
              style={{ paddingLeft: "20px", paddingRight: "20px" }}
            >
              <div className="col form-group">
                <label className="form-label">Team Name</label>
                <span style={{ color: "red" }}> *</span>
                <input
                  className={
                    formik.errors.teamName && formik.touched.teamName
                      ? "form-control errorClass"
                      : "form-control"
                  }
                  onBlur={formik.handleBlur}
                  type="text"
                  name="teamName"
                  value={formik.values.teamName}
                  onChange={formik.handleChange}
                />
                {formik.errors.teamName && formik.touched.teamName && (
                  <span style={{ color: "red", fontSize: "small" }}>
                    {formik.errors.teamName}
                  </span>
                )}
              </div>
              <div className="col form-group">
                <label className="form-label">Coach Name</label>
                <span style={{ color: "red" }}> *</span>
                <input
                  className={
                    formik.errors.coachName && formik.touched.coachName
                      ? "form-control errorClass"
                      : "form-control"
                  }
                  onBlur={formik.handleBlur}
                  type="text"
                  name="coachName"
                  value={formik.values.coachName}
                  onChange={formik.handleChange}
                />
                {formik.errors.coachName && formik.touched.coachName && (
                  <span style={{ color: "red", fontSize: "small" }}>
                    {formik.errors.coachName}
                  </span>
                )}
              </div>
              <div className="col form-group">
                <label className="form-label">Contact No.</label>
                <span style={{ color: "red" }}> *</span>
                <input
                  className={
                    (formik.errors.contactNo && formik.touched.contactNo) || // Check if there's an error or it's touched
                    (formik.values.contactNo.length > 10 &&
                      formik.touched.contactNo) // Check if length exceeds 10
                      ? "form-control errorClass"
                      : "form-control"
                  }
                  onBlur={formik.handleBlur}
                  type="text" // Use type="text" for custom validation
                  name="contactNo"
                  value={formik.values.contactNo}
                  onChange={(e) => {
                    // Allow only numbers and limit length to 10
                    const inputValue = e.target.value
                      .replace(/\D/g, "")
                      .slice(0, 10);
                    formik.handleChange({
                      target: {
                        name: "contactNo",
                        value: inputValue,
                      },
                    });
                  }}
                />
                {formik.errors.contactNo && formik.touched.contactNo && (
                  <span style={{ color: "red", fontSize: "small" }}>
                    {formik.errors.contactNo}
                  </span>
                )}
              </div>
              <div className="col form-group">
                <label className="form-label">Email Address</label>
                <span style={{ color: "red" }}> *</span>
                <input
                  className={
                    formik.errors.emailAddress && formik.touched.emailAddress
                      ? "form-control errorClass"
                      : "form-control"
                  }
                  onBlur={formik.handleBlur}
                  type="text"
                  name="emailAddress"
                  value={formik.values.emailAddress}
                  onChange={formik.handleChange}
                  pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" // Regex pattern for email validation
                />
                {formik.errors.emailAddress && formik.touched.emailAddress && (
                  <span style={{ color: "red", fontSize: "small" }}>
                    {formik.errors.emailAddress}
                  </span>
                )}
              </div>
              <div className="col form-group">
                <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label">
                    Gender
                  </FormLabel>
                  <RadioGroup
                    className="mt-2"
                    row
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    value={formik.values.gender}
                    onChange={(e) => {
                      formik.setFieldValue("gender", e.target.value);
                    }}
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio size="small" />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio size="small" />}
                      label="Male"
                    />
                  </RadioGroup>
                </FormControl>
              </div>
            </div>
          </div>
          <TabContext value={value}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              variant="fullWidth"
            >
              <Tab label="Under 12" value={0} />
              <Tab label="Under 14" value={1} />
              <Tab label="Under 18" value={2} />
              <Tab label="Above 18" value={3} />
            </Tabs>
            <div>
              <TabPanel value={0}>
                <Under12
                  setTeamData12={
                    (data) => dispatch({ type: "under12", data: data }) // make sure to write this dispatch for all other age group
                  }
                  teamData12={state.teamData12}
                />
              </TabPanel>
              <TabPanel value={1}>
                <Under14
                  setTeamData14={
                    (data) => dispatch({ type: "under14", data: data }) // make sure to write this dispatch for all other age group
                  }
                  teamData14={state.teamData14}
                />
              </TabPanel>
              <TabPanel value={2}>
                <Under18 setTeamData18={setteamData18} />
              </TabPanel>
              <TabPanel value={3}>
                <Above18 setTeamDataA18={setteamDataA18} />
              </TabPanel>
            </div>
          </TabContext>
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <button
              type="button"
              className="btn btn-outline-success"
              onClick={() =>
                insertData({
                  ...formik.values,
                  under12: teamData12.under12,
                  under14: teamData14.under14,
                  under18: teamData18.under18,
                  above18: teamDataA18.above18,
                })
              }
            >
              Register Team
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
