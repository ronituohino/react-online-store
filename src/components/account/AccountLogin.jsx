import { useFormik } from "formik"
import * as yup from "yup"

import {
  Container,
  TextField,
  Button,
  InputAdornment,
  IconButton,
} from "@mui/material"

import VisibilityIcon from "@mui/icons-material/Visibility"
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff"

import { useState } from "react"

const AccountLogin = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      email: yup.string().required("Email is required"),
      password: yup.string().required("Password is required"),
    }),
    onSubmit: (event, values) => {
      console.log(event)
      console.log(values)
    },
  })

  const [values, setValues] = useState({
    showPassword: false,
  })

  const togglePasswordVisibility = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const textInputStyle = {
    marginBottom: 2,
  }

  return (
    <Container
      maxWidth={"xs"}
      sx={{
        marginTop: 4,
      }}
    >
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          type="text"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          sx={textInputStyle}
        />

        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type={values.showPassword ? "text" : "password"}
          value={formik.values.password}
          onChange={formik.handleChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={togglePasswordVisibility}>
                  {values.showPassword ? (
                    <VisibilityOffIcon />
                  ) : (
                    <VisibilityIcon />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
          error={
            formik.touched.password && Boolean(formik.errors.password)
          }
          helperText={
            formik.touched.password && formik.errors.password
          }
          sx={textInputStyle}
        />

        <Button
          color="primary"
          variant="contained"
          fullWidth
          type="submit"
        >
          Log in
        </Button>
      </form>
    </Container>
  )
}

export default AccountLogin
