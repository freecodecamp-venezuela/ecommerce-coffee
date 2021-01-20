import {
  Stack,
  HStack,
  VStack,
  SimpleGrid,
  Box,
  Text,
  Heading,
  AspectRatio,
  Image,
  Button,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";

const ProductPage = (product: {
  name: string;
  image: string;
  description: string;
  price: number;
}) => {

  const { name, image, description, price } = product;

  useEffect(() => {
    setCalculatedPrice(price)
  }, [])

  let [calculatedPrice, setCalculatedPrice] = useState(0);
  function itemChange(numberItems: string) {
    setCalculatedPrice( price * Number(numberItems) );
  }

  return (
    <Box>
      <SimpleGrid columns={[2]}>
        <Box>
          <AspectRatio maxW="400px" ratio={4 / 3}>
            <Image src={product.image} alt={product.name} objectFit="cover" />
          </AspectRatio>
        </Box>
        <Box>
          <Heading>{product.name}</Heading>
          <Text>{product.description}</Text>
          <HStack>
            <Text>{product.price}</Text>
            <NumberInput size="sm" defaultValue={1} onChange={itemChange} min={1} >
              {/* The NumberInput element needs an event listener with a function that multiplies 
              the calculated price based on its input value and updates the calculatedPrice state. */}
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </HStack>
          <Text>Total: ${calculatedPrice}</Text>
          <Button>Add to cart</Button>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default ProductPage;
