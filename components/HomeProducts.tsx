import { Flex, Grid, Box, Text} from '@chakra-ui/react'
import Product from './Product'

function HomeProducts({coffees}) {
  return(
    <Flex direction="column" justify="center" maxWidth="7xl" m=".5em auto 0" p="0 1.5em">
      <hearder>
        <Flex justify="space-between">
          <Text fontSize="xl"><strong>Products</strong></Text>
          <Text fontSize="xl" cursor="pointer"><strong>Filters</strong></Text>
        </Flex>
      </hearder>
      <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap="6">
        {
          // I use some fake API
          // Make sure of change the properties when the real API is added
        }
        {coffees.map(coffee =>
          <Product prod={coffee} key={coffee.id} />
        )}
      </Grid>
      <foooter>
        <Box
          w="max-content"
          m=".5em auto"
          p=".2em .4em"
          bg="gray.600"
          color="white"
          fontSize="xl"
          align="center"
          cursor="pointer"
          borderRadius=".3em"
          _hover={{
            background:"gray.400"
          }}
        >
          Show more
        </Box>
      </foooter>
    </Flex>
  )
}

export default HomeProducts
