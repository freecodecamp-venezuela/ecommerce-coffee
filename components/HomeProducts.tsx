import { useState, useEffect} from 'react'
import { Flex, Grid, Box, Text} from '@chakra-ui/react'
import Product from './Product'

function HomeProducts({coffees, itemsLeft}) {
  const [coffeesArr, setCoffeeArr] = useState([...coffees])
  const [coffeesLeft, setCoffeesLeft] = useState(itemsLeft)
  const [isLoading, setIsLoading] = useState(false)

  useEffect( ()=> {
    if (!isLoading) return

    const fetchData = async () => {
      const res = await fetch("http://localhost:3000/api/products")
      const data = await res.json()

      const newCoffees = await data.slice(9)
      const isCoffees= coffeesLeft - newCoffees.length

      setCoffeesLeft(isCoffees)
      setCoffeeArr([...coffeesArr, ...newCoffees])
      setIsLoading(false)
    }

    fetchData()
  }, [isLoading])

  const handleFetch = () => {
    setIsLoading(true)
  }

  return(
    <Flex direction="column" justify="center" maxWidth="7xl" m=".5em auto 0" p="0 1.5em">
      <header>
        <Flex justify="space-between">
          <Text fontSize="xl"><strong>Products</strong></Text>
          <Text fontSize="xl" cursor="pointer"><strong>Filters</strong></Text>
        </Flex>
      </header>

      <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap="6">
        {coffeesArr.map(coffee =>
          <Product prod={coffee} key={coffee.id} />
        )}
      </Grid>

      <footer>
        {coffeesLeft &&
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
            onClick={handleFetch}
          >
            Show more
          </Box>
        }
      </footer>
    </Flex>
  )
}

export default HomeProducts
