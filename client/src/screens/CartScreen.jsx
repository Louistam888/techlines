import { 
  Box, 
  Flex, 
  Heading, 
  HStack, 
  Link, 
  Stack, 
  useColorModeValue as mode, 
  Spinner, 
  Alert, 
  AlertTitle, 
  AlertIcon, 
  AlertDescription, 
  Wrap 
} from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import { useSelector } from "react-redux"

const CartScreen = () => {
  const cartInfo = useSelector((state) => state.cart);
  const { loading, error, cart } = cartInfo;
  return (
    <Wrap spacing="30px" justify="center" min-height="100vh">
      { loading ? (
        <Stack direction="row" spacing={4}>
          <Spinner mt={20} thickness={4} speed="0.65s" emptyColor="gray.200" color="orange.500" size="xl"/>
        </Stack>
      ) : error ? (
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>
            We are sorry!
          </AlertTitle>
          <AlertDescription>
            {error}
          </AlertDescription>
        </Alert>
      ) : cart.length <= 0 ? (
        <Alert status="warning">
          <AlertIcon />
          <AlertTitle>
            Your cart is empty
          </AlertTitle>
          <AlertDescription>
            <Link as ={ReactLink} to="/products">Click here to see our products</Link>
          </AlertDescription>
        </Alert>
      ) : (
        <Box 
          maxW={{base: "3xl", lg: "7x1"}} 
          px="auto" px={{base: "4", md: "8", lg: "12"}}
          py={{base: "6", md: "8", lg: "12"}}>
          <Stack 
            direction={{base: "column", lg: "row"}}
            align={{lg: "flex-start"}}
            spacing={{base:"8", md:"16"}}>
              <Stack
                spacing={{base: "8", md: "10"}}
                flex="2">
                  <Heading fontSize="2x1" fontWeight="extraBold">
                    Shopping Cart
                  </Heading>
                  <Stack spacing="6">
                    {/* CartItem */}
                  </Stack>
              </Stack>
            <Flex direction="column" align="center" flex="1">
              {/* CartOrderSummary */}
            </Flex>
            <HStack mt="6" fontWeight="semibold">
              <p>or</p>
              <Link as={ReactLink} to="/products" color={mode("orange.500", "orange.200")}>
                Continue Shopping</Link>
            </HStack>
          </Stack>
        </Box>
      )}
    </Wrap>
  )
}

export default CartScreen