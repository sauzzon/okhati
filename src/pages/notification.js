import { Alert, Stack, AlertTitle, Snackbar } from "@mui/material";

const Notification = ({ severity, message }) => {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Snackbar open={true}>
        <Alert severity={severity} sx={{ width: "300px" }}>
          <AlertTitle>
            {severity === "error"
              ? "Error"
              : severity === "info"
              ? "Info"
              : "success"}
          </AlertTitle>
          {message}
        </Alert>
      </Snackbar>
    </Stack>
  );
};

export default Notification;
