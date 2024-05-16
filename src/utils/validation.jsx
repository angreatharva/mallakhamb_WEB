import * as React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

export function OutlinedAlerts() {
  return (
    <Stack sx={{ width: "100%" }} spacing={2} margin={(top = 10)}>
      <Alert
        variant="outlined mt-10"
        severity="warning"
        style="margin-top:10px"
      >
        This is an outlined warning Alert.
      </Alert>
    </Stack>
  );
}
