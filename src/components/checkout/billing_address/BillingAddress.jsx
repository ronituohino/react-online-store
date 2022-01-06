import { Container, Button } from "@mui/material"

import { Box } from "@mui/material"

import FormikField from "../../general/formik/FormikField"
import FormikAutoSave from "../../general/formik/FormikAutoSave"
import BetterPaper from "../../general/BetterPaper"

const BillingAddress = ({ formik, next, checkout, hidden }) => {
  const nextButtonDisabled =
    !checkout || !checkout.billingDetails || !formik.isValid

  return (
    <>
      {!hidden && (
        <Container maxWidth="sm">
          <BetterPaper
            label="Billing Address"
            sx={{ marginBottom: 2 }}
            innerSx={{ padding: 3 }}
          >
            <Box
              sx={{
                display: "flex",
                gap: "15px",
                marginBottom: 2,
                width: "100%",
              }}
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
              sx={{ marginBottom: 2 }}
            />

            <Box
              sx={{
                display: "flex",
                gap: "15px",
                marginBottom: 2,
                width: "100%",
              }}
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
              sx={{ marginBottom: 2 }}
            />

            <FormikField
              formik={formik}
              field="phone"
              label="Phone Number (for package tracking)"
            />

            <FormikAutoSave formik={formik} />
          </BetterPaper>

          <Button
            fullWidth
            variant="contained"
            disabled={nextButtonDisabled}
            onClick={next}
          >
            Next
          </Button>
        </Container>
      )}
    </>
  )
}

export default BillingAddress
