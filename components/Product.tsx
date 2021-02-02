import { GridItem, Text, Image } from '@chakra-ui/react'

function Product({prod}) {
  return(
    <GridItem
      key={prod.id}
      colSpan="1"
      h="290px"
      bg="gray.500"
      color="gray.200"
      borderRadius=".5em"
      cursor="pointer"
      _hover={{
        background:"gray.600",
        fontWeight:"bold"
      }}
     >
      <Text fontSize="lg" align="center">{prod.type}</Text>
      <Image
        boxSize="236px"
        alt={prod.type}
        src={prod.img}
        m="0 auto"
        borderRadius=".5em"
      />
      <Text fontSize="lg" align="center">{prod.price}</Text>
    </GridItem>
  )
}

export default Product
