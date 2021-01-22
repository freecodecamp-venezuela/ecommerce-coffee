import { Flex, Grid, GridItem, Text, Image, Box} from '@chakra-ui/react'
import API from '../pages/api/hello'

function HomeProducts() {
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
        {API.coffees.map(coffee =>
          <GridItem
            key={coffee.id}
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
            <Text fontSize="lg" align="center">{coffee.type}</Text>
            <Image
              boxSize="236px"
              alt={coffee.type}
              src={coffee.img}
              m="0 auto"
              borderRadius=".5em"
            />
            <Text fontSize="lg" align="center">{coffee.price}</Text>
          </GridItem>
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
