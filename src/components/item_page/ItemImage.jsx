import { Box } from "@mui/material"

const ItemImage = ({ index, selected, onHover }) => {
  const thisSelected = selected === index
  return (
    <Box
      onMouseEnter={() => onHover(index)}
      sx={{ border: 2, borderRadius: 2, margin: "5px" }}
    >
      <img
        component="img"
        src="https://upload.wikimedia.org/wikipedia/commons/7/76/Mozilla_Firefox_logo_2013.svg"
        style={{
          width: "75px",
          height: "75px",
          borderRadius: 4,
        }}
      />
    </Box>
  )
}

export default ItemImage
