import { Controller, useForm } from "react-hook-form";
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import "./login.css";

export default function Login() {
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
  const onSubmit = (data) => console.log(data)



  return (
    <>

      <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid size={12} display="flex" justifyContent="center" alignItems="center">
        <Controller
          control={control}
          rules={{
            required: true,
            maxLength: 20,
            pattern: /^[A-Za-z]+$/i
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <FormControl error={errors.username ? true : false} variant="standard">
              <InputLabel htmlFor="component-error">User Name</InputLabel>
              <Input
                placeholder="User Name"
                onBlur={onBlur}
                onChange={onChange}
                value={value}
              />
              {errors.username && <FormHelperText id="component-error-text">Error</FormHelperText>}
            </FormControl>
          )}
          name="username"
        />
          </Grid>
          <Grid size={12}  display="flex" justifyContent="center" alignItems="center">
          <Controller
          control={control}
          rules={{
            required: true,
            maxLength: 20,
            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/i
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <FormControl error={errors.password ? true : false} variant="standard">
              <InputLabel htmlFor="component-error">Password</InputLabel>
              <Input
                placeholder="Password"
                onBlur={onBlur}
                onChange={onChange}
                value={value}
                type="password"
              />
              {errors.password && <FormHelperText id="component-error-text">Error</FormHelperText>}
            </FormControl>
          )}
          name="password"
        />
          </Grid>
          <Grid size={12}  display="flex" justifyContent="center" alignItems="center">
          <Button variant="contained" type="submit" disableElevation>
          Login
        </Button>
          </Grid>
          
          </Grid> 
      </form>
      
    </>
  );
}