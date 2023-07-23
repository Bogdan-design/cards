// import React from "react";
// import { authThunks } from "features/auth/auth.slice";
// import s from "register/styles.module.css";
// import { useActions } from "common/hooks/useAppActions";
// import ReactDOM from "react-dom";
// import { useForm, SubmitHandler } from "react-hook-form";
//
// enum GenderEnum {
//   female = "female",
//   male = "male",
//   other = "other",
// }
//
// interface IFormInput {
//   firstName: string;
//   gender: GenderEnum;
// }
//
// export const Login = () => {
//   const { register, handleSubmit } = useForm<IFormInput>();
//   const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
//
//   const { login } = useActions(authThunks);
//
//   const loginHandler = () => login({ email: "bogdanbw@gmail.com", password: "123456789", rememberMe: false });
//
//
//   return (
//
//     <div className={s.container}>
//       <h1>Login</h1>
//       <button onClick={loginHandler}>register</button>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <label>First Name</label>
//         <input {...register("firstName")} />
//         <label>Gender Selection</label>
//         <select {...register("gender")}>
//           <option value="female">female</option>
//           <option value="male">male</option>
//           <option value="other">other</option>
//         </select>
//         <input type="submit" />
//       </form>
//     </div>
//   );
// };


import { useForm, Controller, SubmitHandler } from "react-hook-form";
import React from "react";
import { Checkbox, FormControl, FormControlLabel, FormGroup, Grid, Paper, TextField } from "@mui/material";
import { useActions } from "common/hooks/useAppActions";
import { authThunks } from "features/auth/auth.slice";
import Button from "@mui/material/Button";
import { LinkTo, TextForm } from "features/auth/register/Register";
import { Navigate, useNavigate } from "react-router-dom";
import { emailValidation } from "features/auth/login/validation";
import { useAppSelector } from "app/hooks";
import { selectIsSignIn } from "app/app.selectors";





export const Login = () => {

  const { login } = useActions(authThunks);
  const isSignIn=useAppSelector(selectIsSignIn)

  const navigate = useNavigate()

  const {
    control,
    handleSubmit,
    formState: {errors}
  } = useForm({
    defaultValues: {
      firstName:"",
      email: "",
      password: "",
      rememberMe: false
    }
  });


  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    login(data)
  };

  if(isSignIn) {
    return <Navigate to={"/login"} />
  }

  return <Paper elevation={3} sx={{
    display: "flex",
    width: 420,
    height: 528,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }}>
      <h1>Sing In</h1>
    <Grid container justifyContent="center">

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <FormGroup>
            <Controller
              name="email"
              control={control}
              rules={emailValidation}
              render={({ field }) =>
                <TextField sx={{
                  width: 348,
                  height: 60
                }}
                           label="Email"
                           margin="normal"
                           error={!!errors.email}
                           helperText={errors.email?.message}
                           {...field} />}
            />
            <Controller
              name="password"
              control={control}
              render={({ field }) =>
                <TextField
                  label="password"
                  type="password"
                  margin="normal"
                  {...field} />}
            />
            <Controller
              name="rememberMe"
              control={control}
              render={({ field }) =>
                <FormControlLabel control={<Checkbox
                  {...field} />} label="Remember me" />
                }
            />
            <Button type={'submit'}
                    variant={'contained'}
                    // disabled={!(formik.isValid && formik.dirty)}
                    color={'secondary'}>
              Sing In
            </Button>
           <TextForm>
             Forgot Password?
           </TextForm>
            <LinkTo onClick={()=>navigate('/login')}>Sing IN</LinkTo>
          </FormGroup>
        </FormControl>
      </form>
    </Grid>
  </Paper>;
};

//type
type IFormInput = {
  email: string;
  password: string;
  rememberMe: boolean;
}