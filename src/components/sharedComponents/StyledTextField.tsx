import { TextField } from "@mui/material";

type Props = {
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: () => void;
    error?: boolean;
    helperText?: string;
    ariaDescription?: string;
};

export const StyledTextField = ({ label, value, onChange, onBlur, error, helperText, ariaDescription}: Props) => (
    <TextField
        label={label}
        variant="filled"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        error={error}
        helperText={helperText}
        aria-describedby={ariaDescription}
    />
);