import { Controller, useForm } from "react-hook-form";
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import "./login.css";

interface IFormInput {
  firstName: string;
  lastName: string;
  age: number;
  example: string;
}

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
  const onSubmit = (data: any) => console.log(data)



  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
   <Controller
        control={control}
        rules={{
          required: true,
          maxLength: 20,
          pattern: /^[A-Za-z]+$/i
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <FormControl error variant="standard">
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

<Controller
        control={control}
        rules={{
          required: true,
          maxLength: 20,
          pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/i
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <FormControl error variant="standard">
        <InputLabel htmlFor="component-error">Password</InputLabel>
        <Input
          placeholder="Password"
          onBlur={onBlur}
          onChange={onChange}
          value={value}
        />
        {errors.password && <FormHelperText id="component-error-text">Error</FormHelperText>}
      </FormControl>
        )}
        name="password"
      />
      <input type="submit" />
    </form>

    </>
  );
  }