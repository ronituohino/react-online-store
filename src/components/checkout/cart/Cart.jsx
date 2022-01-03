import { Box, Button } from "@mui/material"

import { useShoppingCart } from "../../../hooks/useShoppingCart"

import ShoppingCartItem from "../../top_bar/shopping_cart/ShoppingCartItem"
import ContentCard from "../../content/ContentCard"
import Receipt from "./Receipt"
import Coupons from "./Coupons"

const Cart = ({ complete, hidden }) => {
  const { data, totalAmountOfItems } = useShoppingCart()
  const total = totalAmountOfItems()

  return (
    <>
      {!hidden && (
        <Box sx={{ display: "flex", gap: "30px" }}>
          <ContentCard
            disableHover
            size={{ width: "60%", height: "100%" }}
          >
            {total === 0 && <p>empty!</p>}
            {total > 0 &&
              data.cartItems.map((obj) => (
                <ShoppingCartItem
                  key={obj.item.hash}
                  cartObject={obj}
                  ref={null}
                />
              ))}
          </ContentCard>

          <Box sx={{ width: "40%", height: "100%" }}>
            <Receipt />
            <Box sx={{ height: 30 }} />
            <Coupons />
            <Box sx={{ height: 30 }} />
            <Button
              fullWidth
              variant="contained"
              onClick={() => complete()}
            >
              Next
            </Button>
          </Box>
        </Box>
      )}
    </>
  )
}

export default Cart
