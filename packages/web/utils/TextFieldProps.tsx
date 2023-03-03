import { TextField } from "@mui/material";

interface IFIeld {
    readonly id: number | string;
    readonly placeholder: string;
    readonly name: string;
}

export default function TextFieldProps({ field }: IFIeld) {
    const { name, placeholder, id } = field;
    return <TextField placeholder={placeholder} />;
}
