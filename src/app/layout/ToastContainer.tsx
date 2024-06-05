import { Alert, IconButton, Snackbar } from "@mui/material";
import { observer } from "mobx-react-lite";
import CloseIcon from "@mui/icons-material/Close";
import { useStore } from "../stores/store";
import Slide from '@mui/material/Slide';


export default observer(function ToastContainer() {
  const {toastStore:{closeToast, open, message, type}} = useStore();
  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={closeToast}
      TransitionComponent={Slide}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      action={
        <>
          <IconButton
            aria-label="close"
            color="inherit"
            sx={{ p: 0.5 }}
            onClick={closeToast}
          >
            <CloseIcon />
          </IconButton>
        </>
      }
    >
      <Alert onClose={closeToast} severity={type} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
});
