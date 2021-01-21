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
    setCalculatedPrice(price);
  }, []);

  let [calculatedPrice, setCalculatedPrice] = useState(0);
  function itemChange(numberItems: string) {
    setCalculatedPrice(price * Number(numberItems));
  }

  /* To-do:
  * Store current quantity and total price in local state
  * On button click, add the local values to the shopping cart.
   We'll need to wait for instructions on this one.
  */

  // Optional component data ideas:
  /* 
    Total sold products
    The product includes free shipping (yes, no) */

  return (
    <SimpleGrid
      h={["100%", null, "90vh"]}
      columns={[1, 1, 2, 2]}
      spacing="40px"
      placeItems="center"
      padding={5}
    >
      <AspectRatio
        ratio={4 / 3}
        w="100%"
        minW={[null, null, "400px"]}
        maxW={["400px", "400px", "600px"]}
      >
        <Image
          src="https://bit.ly/naruto-sage"
          alt="naruto"
          objectFit="cover"
        />
      </AspectRatio>

      <VStack spacing={4} align="start">
        <Heading size="2xl">{product.name}</Heading>
        <Text fontSize="xl" fontWeight="bold">
          ${product.price}
        </Text>
        <Text fontSize="md" w={["40ch", "60ch"]} mb={10}>
          {product.description}
        </Text>
        <Stack
          w="100%"
          direction={["column", "column", "row"]}
          align={["left", "left", "center"]}
          justify="start"
        >
          <Text>Total:</Text>
          <Text fontSize="3xl" fontWeight="bold">
            ${calculatedPrice}
          </Text>
          <Stack
            direction="row"
            align="center"
            justify="center"
            w={["100%", "100%", "auto", "auto"]}
          >
            <Text>Quantity:</Text>
            <NumberInput
              defaultValue={1}
              onChange={itemChange}
              min={1}
              w={["100%", "100%", "auto", "8rem"]}
            >
              <NumberInputField w={["100%", "100%", "8rem", "8rem"]} />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Stack>
        </Stack>

        <Button w={["100%", "100%", "auto"]}>Add to cart</Button>
      </VStack>
    </SimpleGrid>
  );
};

export default ProductPage;
