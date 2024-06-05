import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

interface Props {
  title?: string;
  content: string;
  confirm: () => void;
  cancel: () => void;
  yesText?: string;
  noText?: string;
}

export default function ConfirmModal({
  title,
  content,
  cancel,
  confirm,
  noText="No",
  yesText="Yes",
}: Props) {
  return (
    <>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{content}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={confirm} variant="contained" color="primary">
          {yesText}
        </Button>
        <Button onClick={cancel} variant="contained" color="error">
          {noText}
        </Button>
      </DialogActions>
    </>
  );
}
