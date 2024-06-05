import { FormControl, InputLabel, Select, InputAdornment, MenuItem } from "@mui/material";
import { useField } from "formik";

interface Props {
    placeholder?: string;
    name: string;
    options: any;
    label?: string | null;
    info?: string;
    value?: any;
}

export default function MySelectInput(props: Props) {
    const [field, meta, helpers] = useField(props.name);
    return (
        <>
            <FormControl fullWidth variant="outlined" margin="dense">
                <InputLabel>{props.placeholder}</InputLabel>
                <Select
                    label={props.placeholder}
                    name={props.name}
                    defaultValue={field.value}
                    inputProps={{ name: props.name }}
                    error={meta.touched && !!Boolean(meta.error)}
                    // helperText={props && meta.error}

                    // onChange={(e,d:)=> helpers.setValue(d.value)}
                    onChange={(e) => helpers.setValue(parseInt(e.target.value, 10))}
                    onBlur={() => helpers.setTouched(true)}
                    startAdornment={props.info && (
                        <InputAdornment position="start">
                            {props.info}
                        </InputAdornment>
                    )}
                >
                    {props.options.map((option: any) => (
                        <MenuItem key={option.value} value={option.value}>{option.name}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            {meta.touched && !!meta.error && <span style={{ color: 'red', marginLeft:'15px', fontSize:'14px' }}>{meta.error}</span>}
            {/* <FormControl fullWidth variant="outlined" margin="dense">
                <InputLabel>{placeholder}</InputLabel>
                <Select
                    label={placeholder}
                    {...field}
                    error={meta.touched && !!meta.error}
                    defaultValue={field.value}
                    inputProps={{ name: field.name }}
                    startAdornment={icon && (
                        <InputAdornment position="start">
                            {icon}
                        </InputAdornment>
                    )}
                >
                    {props.options.map(option => (
                        <MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>
                    ))}
                </Select>
                {meta.touched && !!meta.error && <p style={{ color: 'red' }}>{meta.error}</p>}
            </FormControl> */}
        </>
    )
}