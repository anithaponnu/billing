import { Avatar, Box, Container, FormControl, Icon, InputLabel, MenuItem, Paper, Select, TextField, Typography, useTheme, type SelectChangeEvent } from "@mui/material"
import { useForm } from "react-hook-form"
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import React from "react";

export default function addUser() {
    const [user, setUser] = React.useState('');

    const handleChange = (event) => {
        setUser(event.target.value);
    };
    const validateUsername =(username ) => {
        if(username!=undefined){
            const minLength=6;
            const maxLength=20;
            const hasreg = /^[A-Za-z]+$/.test(username);
            if (username.length < minLength) {
                return "Username must be at least 6 characters long.";
            }
            if (username.length > maxLength) {
                return "Username must be at least 20 characters long.";
            }
            if(!hasreg){
                return "only use uppercase and lowercase alpha character."
            }
        }else{
            return "Username must be contain only a-z & A-Z, min 6 character max 8 character only."
        }
        const fromvalue = watch()
    }
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
    return (
        <Container maxWidth="xs">
            <Paper elevation={10} sx={{ marginTop: 8, padding: 2 }}>


                <Typography component="h1" variant="h5" sx={{ textAlign: "center" }}>
                    <Avatar
                        sx={{
                            mx: "auto",
                            bgcolor: "secondary.main",
                            textAlign: "left",
                            mb: 1,
                        }}>
                        <PersonOutlineIcon />
                    </Avatar>
                    <Box sx={{ manWidth: 250 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">User Type</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={user}
                                label="UserType"
                                onChange={handleChange}
                            >
                                <MenuItem >Admin</MenuItem>
                                <MenuItem >Accountant</MenuItem>
                                <MenuItem > Add User</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
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
                                placeholder="Enter Firstname"
                                fullWidth
                                autoFocus
                                sx={{ mb: errors.username ? 0 : 2 }}
                                onBlur={onBlur}
                                onChange={onChange}
                                value={value}
                            />
                        )}
                        name="Firstname"
                    />
                    {errors.username && <Typography variant="caption" sx={{ mb: 2 }} color='error'>
                    {validateUsername(fromvalue.username)} 
                    
                    </Typography>}

            </Paper>
        </Container>
    )
}