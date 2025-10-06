import { Avatar, Box, Button, Container, FormHelperText, Paper, TextField, Typography } from "@mui/material";
import LockOutlineIcon from '@mui/icons-material/LockOutline';
import { Controller, useForm } from "react-hook-form";
import {validateAZaz} from "../helper"



export default function Loginv2() {

    const {
        control,
        handleSubmit,
        formState: { errors },
        watch
    } = useForm({
        defaultValues: {
            username: "",
            password: "",
        },
    })
    const onSubmit = (data) => console.log(data)
    const validatePassword = (password) => {
        if(password!=undefined){
            const minLength = 8;
            const hasUpperCase = /[A-Z]/.test(password);
            const hasLowerCase = /[a-z]/.test(password);
            const hasNumber = /[0-9]/.test(password);
            const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
            if (password.length < minLength) {
                return "Password must be at least 8 characters long.";
            }
            if (!hasUpperCase) {
                return "Password must include at least one uppercase letter.";
            }
            if (!hasLowerCase) {
                return "Password must include at least one lowercase letter.";
            }
            if (!hasNumber) {
                return "Password must be include at least one number.";
            }
            if (!hasSpecialChar) {
                return "Password must be include at least one special character.";
            }
        }else{
            return "Password must be at least 8 characters long.";
        }
    }
    const fromvalue = watch()

    return (
        <Container maxWidth="xs">
            <Paper elevation={10} sx={{ marginTop: 8, padding: 2 }}>
                <Avatar
                    sx={{
                        mx: "auto",
                        bgcolor: "secondary.main",
                        textAlign: "center",
                        mb: 1,
                    }}>
                    <LockOutlineIcon />
                </Avatar>
                <Typography component="h1" variant="h5" sx={{ textAlign: "center" }}>
                    Sign In
                </Typography>
                <Box
                    component="form"
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                    sx={{ mt: 1 }}
                >

                    <Controller
                        control={control}
                        rules={{
                            required: true,
                            minLength:6,
                            maxLength: 20,
                            pattern: /^[A-Za-z]+$/i
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (

                            <TextField
                                error={errors.username ? true : false}
                                placeholder="Enter username"
                                fullWidth
                                autoFocus
                                sx={{ mb: errors.username ? 0 : 2 }}
                                onBlur={onBlur}
                                onChange={onChange}
                                value={value}
                            />
                        )}
                        name="username"
                    />
                    {errors.username && <Typography variant="caption" sx={{ mb: 2 }} color='error'>
                    {validateAZaz(fromvalue.username,"Username",6,20)} 
                    </Typography>}

                    <Controller name="password" control={control} rules={{ required: true, maxLength: 20, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/i }}
                        render={({ field: { onChange, onBlur, value } }) => (

                            <TextField
                                error={errors.password ? true : false}
                                placeholder="Enter password"
                                fullWidth
                                type="password"
                                onBlur={onBlur}
                                onChange={onChange}
                                value={value}
                            />

                        )}
                    />
                    {errors.password && <Typography variant="caption" sx={{ mb: 2 }} color='error'>
                        {validatePassword(fromvalue.password)} 
                    </Typography>}


                    <Button type="submit" variant="contained" fullWidth sx={{ mt: 1 }}>
                        Sign In
                    </Button>
                </Box>

            </Paper>
        </Container>
    )
}