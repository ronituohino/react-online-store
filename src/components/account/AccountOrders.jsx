import { Box } from "@mui/material"
import { useAccount } from "../../hooks/useAccount"

const AccountOrders = () => {
  const { data } = useAccount()
  console.log(data)
  return (
    <>
      {data && data.me && (
        <Box sx={{ padding: 2 }}>
          <p>hekjlo</p>
        </Box>
      )}
    </>
  )
}

export default AccountOrders
