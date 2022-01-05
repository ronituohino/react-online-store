import { Container, Button, Paper } from "@mui/material"
import { useFormik } from "formik"
import * as yup from "yup"
import { Box } from "@mui/material"

import { useEffect } from "react"

import FormikField from "../../general/formik/FormikField"
import FormikAutoSave from "../../general/formik/FormikAutoSave"

const BillingAddress = ({
  next,
  checkout,
  setBillingDetails,
  setError,
  hidden,
}) => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      zipCode: "",
      country: "FI",
      company: "",
      phone: "",
    },
    validationSchema: yup.object({
      firstName: yup.string().required("First name is required"),
      lastName: yup.string().required("Last name is required"),
      address: yup.string().required("Address is required"),
      city: yup.string().required("City is required"),
      zipCode: yup
        .string()
        .matches(/^[0-9]+$/, "Must be digits only")
        .min(5, "Must be 5 digits")
        .max(5, "Must be 5 digits")
        .required("Postal code is required"),
      country: yup.string().required("Country is required"),
      company: yup.string(),
      phone: yup
        .string()
        .matches(/^[0-9]+$/, "Must be digits only")
        .min(10, "Must be 10 digits")
        .max(10, "Must be 10 digits"),
    }),
    onSubmit: () => {},
    validateOnChange: false,
    validateOnBlur: false,
  })

  // Used to set checkout errors
  useEffect(() => {
    setError(formik.isValid)
  }, [formik.isValid])

  const nextButtonDisabled =
    !checkout || !checkout.billingDetails || !formik.isValid

  return (
    <>
      {!hidden && (
        <Container
          maxWidth="sm"
          sx={{
            marginTop: 2,
          }}
        >
          <Paper sx={{ padding: 2 }} variant="outlined">
            <Box
              sx={{ display: "flex", gap: "15px", marginBottom: 2 }}
            >
              <FormikField
                formik={formik}
                field="firstName"
                label="First Name"
                sx={{ width: "50%" }}
              />

              <FormikField
                formik={formik}
                field="lastName"
                label="Last Name"
                sx={{ width: "50%" }}
              />
            </Box>

            <FormikField
              formik={formik}
              field="address"
              label="Address"
            />

            <Box
              sx={{ display: "flex", gap: "15px", marginBottom: 2 }}
            >
              <FormikField
                formik={formik}
                field="zipCode"
                label="Zip Code"
                sx={{ width: "40%" }}
              />
              <FormikField
                formik={formik}
                field="city"
                label="City"
                sx={{ width: "60%" }}
              />
            </Box>

            <FormikField
              formik={formik}
              field="company"
              label="Company"
            />

            <FormikField
              formik={formik}
              field="phone"
              label="Phone Number (for package tracking)"
            />

            <FormikAutoSave
              formik={formik}
              onSave={() => {
                setBillingDetails(formik.values)
              }}
            />

            <Button
              fullWidth
              variant="contained"
              disabled={nextButtonDisabled}
              onClick={next}
            >
              Next
            </Button>
          </Paper>
        </Container>
      )}
    </>
  )
}

export default BillingAddress
