import { Avatar, Box, Button, Container, FormHelperText, Paper, TextField, Typography } from "@mui/material";
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
    })
    const onSubmit = (data: any) => console.log(data)


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
                        Invalied username
                                        </Typography>}

<Controller name="password" control={control} rules={{ required:true,maxLength:20, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/i}}
render={({ field: { onChange, onBlur, value } })=>(
    <TextField
    error={errors.username ? true : false}
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
                        Invalied password
                                        </Typography>}

                   
                    <Button type="submit" variant="contained" fullWidth sx={{ mt: 1 }}>
                        Sign In
                    </Button>
                </Box>

            </Paper>
        </Container>
    )
}