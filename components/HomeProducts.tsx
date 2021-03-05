import { useState, useEffect} from 'react'
import { Flex, Grid, Box, Text} from '@chakra-ui/react'
import Product from './Product'

function HomeProducts({ coffees, offset, isProductsLeft }) {
  const [coffeesArr, setCoffeesArr] = useState([...coffees])
  const [dataOffset, setDataOffset] = useState(offset.toString())
  const [isCoffeLeft, setIsCoffeesLeft] = useState(isProductsLeft)
  const [isLoading, setIsLoading] = useState(false)

  useEffect( ()=> {
    if (!isLoading) return

    const fetchData = async () => {
      const params = `offset=${dataOffset}&limit=6`

      const res = await fetch(`http://localhost:3000/api/products?${params}`)
      const data = await res.json()

      setCoffeesArr([...coffeesArr, ...data.productsSliced])
      setDataOffset(offset)
      setIsCoffeesLeft(data.isProductsLeft)
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
        {isCoffeLeft &&
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
