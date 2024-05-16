import axios from "axios";

export const insertData = async (data) => {
  try {
    console.log("service");
    console.log(data);
    const response = axios
      .create()
      .post("http://192.168.0.104:3000/registerTeam", data);
  } catch (error) {}
};
