import Head from "next/head";
import { RiShoppingCartFill } from "react-icons/ri";
import {
  Container,
  List,
  ListItem,
  Icon,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";
import ProductPage from "./Product";

function Layout({ children }) {
  const bg = useColorModeValue("white", "gray.900");

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box bg={bg}>
        <Container maxWidth="7xl">
          <nav>
            <List
              height="60px"
              padding="0.5em"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <ListItem>ECOMMERCE COFFEE</ListItem>
              <ListItem>
                <Icon as={RiShoppingCartFill} w={6} h={6} />
              </ListItem>
            </List>
          </nav>
        </Container>

        <ProductPage 
          name="Nombre producto"
          description="esta es la descripcion del producto"
          image="https://picsum.photos/seed/picsum/200/600"
          price={20}
        />
      </Box>
      <main>{children}</main>
    </>
  );
}

export default Layout;
