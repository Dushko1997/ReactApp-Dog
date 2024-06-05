import {
  Dialog,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { observer } from "mobx-react-lite";
import { useStore } from "../stores/store";

export default observer(function ModalContainer() {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const { modalStore: {modal, closeModal} } = useStore();
  return (
    <Dialog
      fullScreen={fullScreen}
      open={modal.open}
      onClose={closeModal}
    >
      {modal.body}
    </Dialog>
  );
});
