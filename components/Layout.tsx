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
          description="Nulla pulvinar risus quam. Nullam in tincidunt justo. Suspendisse a tortor in elit tempor semper a a augue. Suspendisse eu rutrum eros. Mauris eu nunc nibh. Cras fringilla lectus eget pretium fermentum. Donec maximus urna in risus viverra laoreet eleifend eu nunc. Etiam sed imperdiet turpis. Pellentesque faucibus libero ex."
          image="https://picsum.photos/seed/picsum/200/600"
          price={20}
        />
      </Box>
      <main>{children}</main>
    </>
  );
}

export default Layout;
