import { Button, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";

interface Props {
    title: string;
    content: string;
    cancel: () => void;
}

export default function AlertModal({title, content, cancel}: Props) {
    return (<>
        <DialogTitle>
            {title}
        </DialogTitle>
        <DialogContent>
            <DialogContentText>
                {content}
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={cancel} color="primary">
                Ok
            </Button>
        </DialogActions>
        </>
    )
}