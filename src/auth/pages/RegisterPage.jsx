import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";

import { Grid, Typography, TextField, Button, Link } from "@mui/material";
import { useForm } from "../../hooks/useForm";
import { useState } from "react";
const formValidations = {
  email: [(value) => value.includes("@"), "El correo debe de tener un arroba"],
  password: [
    (value) => value.length >= 6,
    "El password debe tener por lo menos 6 letras o más",
  ],
  displayName: [(value) => value.length >= 1, "El nombre es requerido"],
};
export const RegisterPage = () => {
  const [formSubmited, setFormSubmited] = useState(false);

  const {
    displayName,
    email,
    password,
    onInputChange,
    isFormValid,
    emailValid,
    displayNameValid,
    passwordValid,
  } = useForm(
    {
      displayName: "",
      email: "",
      password: "",
    },
    formValidations
  );

  const onSubmit = (e) => {
    e.preventDefault();
    setFormSubmited(true);
    if (!isFormValid) return;
  };

  return (
    <AuthLayout title="Crear Cuenta">
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre completo"
              type="text"
              placeholder="Ej: Andrés Sierra"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubmited}
              helperText={displayNameValid}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="correo@correo.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmited}
              helperText={emailValid}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmited}
              helperText={passwordValid}
            />
          </Grid>
          <Grid container spacing={2} sx={{ mt: 2, mb: 1 }}>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" fullWidth>
                Crear Cuenta
              </Button>
            </Grid>
          </Grid>

          <Grid container direciton="row" justifyContent="flex-end">
            <Typography sx={{ mr: 1 }}> ¿Ya tienes cuenta? </Typography>
            <Link component={RouterLink} color="inherit" to="/auth/login">
              Ingresar
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};

export default RegisterPage;
