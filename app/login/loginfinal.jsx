import { Avatar, Box, Button, Container, Paper, TextField, Typography } from "@mui/material";
import LockOutlineIcon from '@mui/icons-material/LockOutline';
import { Controller, useForm } from "react-hook-form";

export default function Loginv2() {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            username: "",
            password: "",
        },
    });

    const onSubmit = (data) => console.log(data);

    // Validation rules with custom error codes
    const usernameRules = {
        required: { value: true, message: "[U001] Username is required." },
        minLength: {
            value: 6,
            message: "[U002] Username must be at least 6 characters.",
        },
        maxLength: {
            value: 20,
            message: "[U003] Username must be no more than 20 characters.",
        },
        pattern: {
            value: /^[A-Za-z]+$/,
            message: "[U004] Only alphabetic characters (A-Z, a-z) are allowed.",
        },
    };

    const passwordRules = {
        required: { value: true, message: "[P001] Password is required." },
        pattern: {
            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/,
            message:
                "[P002] Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.",
        },
    };

    const renderField = ({ name, label, type = "text", rules }) => (
        <Controller
            name={name}
            control={control}
            rules={rules}
            render={({ field }) => (
                <TextField
                    {...field}
                    type={type}
                    fullWidth
                    placeholder={label}
                    error={Boolean(errors[name])}
                    helperText={errors[name]?.message}
                    margin="normal"
                />
            )}
        />
    );

    return (
        <Container maxWidth="xs">
            <Paper elevation={10} sx={{ mt: 8, p: 3 }}>
                <Avatar sx={{ mx: "auto", bgcolor: "secondary.main", mb: 1 }}>
                    <LockOutlineIcon />
                </Avatar>
                <Typography component="h1" variant="h5" textAlign="center">
                    Sign In
                </Typography>
                <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
                    {renderField({ name: "username", label: "Enter username", rules: usernameRules })}
                    {renderField({ name: "password", label: "Enter password", type: "password", rules: passwordRules })}

                    <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
                        Sign In
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
}
