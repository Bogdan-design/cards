import { useForm, Controller, SubmitHandler } from "react-hook-form";
import React from "react";
import { Checkbox, FormControl, FormControlLabel, FormGroup, Grid, Paper, TextField } from "@mui/material";
import { useActions } from "common/hooks/useAppActions";
import { authThunks } from "features/auth/auth.slice";
import Button from "@mui/material/Button";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";



export const Register = () => {

  const { register } = useActions(authThunks);
  const navigate = useNavigate()

  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword:""
    }
  });


  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    register(data)
  };


  return <Paper elevation={3} sx={{
    display: "flex",
    width: 420,
    height: 528,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }}>
    <h1>Sing Up</h1>
    <Grid container justifyContent="center">

      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <FormGroup>
            <Controller
              name="email"
              control={control}
              render={({ field }) =>
                <TextField sx={{
                  width: 348,
                  height: 60
                }}
                           label="Email"
                           margin="normal"
                           {...field} />}
            />
            <Controller
              name="password"
              control={control}
              render={({ field }) =>
                <TextField
                  label="Password"
                  type="password"
                  margin="normal"
                  {...field} />}
            />
            <Controller
              name="confirmPassword"
              control={control}
              render={({ field }) =>
                <TextField
                  label="Confirm Password"
                  type="confirmPassword"
                  margin="normal"
                  {...field} />}
            />
            <Button type={'submit'}
                    variant={'contained'}
                    // disabled={!(formik.isValid && formik.dirty)}
                    color={'secondary'}>
              Sing Up
            </Button>
            <TextForm>Already have an account?</TextForm>
            <LinkTo onClick={()=>navigate('/login')}>Sing In</LinkTo>
          </FormGroup>
        </FormControl>
      </form>
    </Grid>
  </Paper>;
};

export const LinkTo = styled.a`
  color: var(--primary-500, #8C61FF);
  display: flex;
  justify-content: center;
  cursor: pointer;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  text-decoration-line: underline;
`

export const TextForm = styled.h3`
  color:#C3C1C7;
  text-align: center; 
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`

//type
type IFormInput = {
  email: string;
  password: string;
  confirmPassword:string;
}