import { InputAdornment, TextField } from "@mui/material";
import { useField } from "formik";

interface Props {
    placeholder?: string;
    name: string;
    label?: string | null;
    type?: string;
    info?: string;
    disabled?: boolean
    icon?: any;
    rows?: number;

}

export default function MyTextArea(props: Props) {
    const [field, meta] = useField(props.name);
    return (

        <TextField
            fullWidth
            label={props.placeholder}
            variant="outlined"
            margin="dense"
            multiline
            rows={props.rows}
            onChange={field.onChange}
            error={meta.touched && !!Boolean(meta.error)}
            defaultValue={field.value}
            helperText={props && meta.error}
            name={props.name}
            InputProps={props.icon ? {
                startAdornment: (
                  <InputAdornment position="start">
                    {props.icon}
                  </InputAdornment>
                ),
              } : undefined}
        >
        </TextField>
    )

}