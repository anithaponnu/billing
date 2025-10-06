import { Box, Button, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField, Typography, styled } from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Controller, useForm } from "react-hook-form";


import { Phonecontroller} from "../component/phoneMuiInput";
import {validateAZaz} from "../helper"
import { DateOfBirthPicker } from "../component/dateOfBirthPicker";


export default function addUser1() {
    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });
    const {
        control,
        handleSubmit,
        formState: { errors },
        watch
    } = useForm({
        defaultValues: {
            a: "",
            a1: "",
            password: "",
            e: "",
            ph:"+91",
            ph1:""
            
        },

    })

    const onSubmit = (data) => console.log(data)
    const fromvalue = watch()

    const today = new Date();
  const pastDate = new Date();
  pastDate.setFullYear(today.getFullYear() - 18);

  const maxDate = pastDate.toISOString().split('T')[0]

    return (
        <Box m={2} component="form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate>
            <Grid container rowSpacing={1} columnSpacing={2}>
                <Grid size={6} >First Name
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                            minLength: 4,
                            maxLength: 20,
                            pattern: /^[A-Za-z]+$/i
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (

                            <TextField
                                error={errors.a ? true : false}
                                placeholder="Enter Firstname"
                                fullWidth
                                autoFocus
                                sx={{ mb: errors.a ? 0 : 2 }}
                                onBlur={onBlur}
                                onChange={onChange}
                                value={value}
                            />
                        )}
                        name="a"
                    />
                    {errors.a && <Typography variant="caption" sx={{ mb: 2 }} color='error'>
                        {validateAZaz(fromvalue.a,"Firstname",4,20)}
                    </Typography>}

                </Grid>
                <Grid size={6}>Last Name
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                            minLength: 1,
                            maxLength: 20,
                            pattern: /^[A-Za-z]+$/i
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (

                            <TextField
                                error={errors.a1 ? true : false}
                                placeholder="Enter Last Name"
                                fullWidth
                                autoFocus
                                sx={{ mb: errors.a1 ? 0 : 2 }}
                                onBlur={onBlur}
                                onChange={onChange}
                                value={value}
                            />
                        )}
                        name="a1"
                    />
                    {errors.a && <Typography variant="caption" sx={{ mb: 2 }} color='error'>
                        {validateAZaz(fromvalue.a1,"Lastname",1,20)}
                    </Typography>}
                </Grid>
                <Grid size={12}>
                    <Phonecontroller control={control} name={"ph"} errors={errors}/>
                </Grid>
                <Grid size={12} >Email
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (

                            <TextField
                                error={errors.e ? true : false}
                                placeholder="Enter Email"
                                fullWidth
                                autoFocus
                                sx={{ mb: errors.e ? 0 : 2 }}
                                onBlur={onBlur}
                                onChange={onChange}
                                value={value}
                            />
                        )}
                        name="e"
                    />
                    {errors.e && <Typography variant="caption" sx={{ mb: 2 }} color='error'>
                        Invalide Email
                    </Typography>}
                </Grid>
                <Grid size={6}>Date of Birth<br />
                    <DateOfBirthPicker />
                </Grid>
                <Grid size={6}>Gender
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                    </RadioGroup>
                </Grid>
                <Grid size={12} >Address
                    <TextField
                        multiline
                        fullWidth
                        autoFocus
                        rows={5}
                        placeholder="Enter address"
                    />
                </Grid>
                <Grid size={12} sx={{ textAlign: "center" }}>
                    <Button
                        component="label"
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
                        startIcon={<CloudUploadIcon />}
                    >
                        Upload profile picture
                        <VisuallyHiddenInput
                            type="file"
                            onChange={(event) => console.log(event.target.files)}
                            multiple
                        />
                    </Button>
                </Grid>
                <Grid size={12} sx={{ textAlign: "center" }}>
                    <Button type="submit" variant="contained" sx={{ mt: 1 }}>
                        Save
                    </Button></Grid>

            </Grid>

        </Box>
    );

}