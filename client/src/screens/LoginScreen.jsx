import { 
  Box, 
  Button, 
  Checkbox, 
  Container, 
  FormControl, 
  Heading, 
  HStack, 
  Stack, 
  Text, 
  useBreakpointValue, 
  useColorMode, 
  Alert, 
  AlertIcon, 
  AlertTitle, 
  AlertDescription, 
  useToast
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react";
import { useNavigate, Link as ReactLink, useLocation } from "react-router-dom";
import PasswordTextField from "../components/PasswordTextField";
import Textfield from "../components/Textfield";
import { login } from "../redux/actions/userActions";

//TODO: redefine password length 
const LoginScreen = () => {
const navigate = useNavigate();
const location = useLocation();
const dispatch = useDispatch();
const redirect = "/products";
const toast = useToast();

  const headingBR = useBreakpointValue({base: "xs", md:"sm"});
  const boxBR = useBreakpointValue({base: "transparent", md: "bg-surface"});

  return (
    <Formik 
      InitialValues={{email: "",password: "" }}
      validationSchema={Yup.object({
        email: Yup.string().email("Invalid email.").required("An email address  is required."),
        password: Yup.string().min(1, "Password is too short - your password must contain at least one character").required("Password is required."),
      })} 
      onSubmit={(values) => {
        dispatch(login(values.email, values.password));
      }}>
        {(formik)=> (
          <Container maxW="lg" py={{base: "12", md: "24"}} px={{base:"0", md:"8"}} minH="4xl">
            <Stack spacing="8">
              <Stack spacing="6">
                <Stack spacing={{base: "2", md: "3"}} textAlign="center">
                  <Heading size={{headingBR}}>
                    Log into your account
                  </Heading>
                  <HStack spacing="1" justify="center">
                    <Text color="muted">
                      Don't have an account? 
                    </Text>
                    <Button as={ReactLink} to="/registration" variant="link" colorScheme="orange">
                      Sign Up
                    </Button>
                  </HStack>
                </Stack>
              </Stack>
              <Box 
                py={{base: "0", md: "8"}}
                px={{base: "4", md: "10"}}
                bg={{boxBR}}
                boxShadow={{base: "none", md:"xl"}}
              >
                <Stack spacing="6" as="form" onSubmit={formik.handleSubmit}>
                  {error && (
                    <Alert 
                      status="error" 
                      flexDirection="column" 
                      alignItems="center" 
                      justifyContent="center" 
                      textAlign="center">
                    <AlertIcon />
                    <AlertTitle>
                      We are sorry!
                    </AlertTitle>
                    <AlertDescription>
                      {error}
                    </AlertDescription>
                  </Alert>
                  )}
                  <Stack spacing="5">
                    <FormControl>
                      <TextField type="text" name="email" placeholder="you@example.com" label="Email" />
                      <PasswordTextField type="password" name="password" placeholder="your password" label="Password" />
                    </FormControl>
                  </Stack>
                  <Stack spacing="6">
                    <Button colorScheme="orange" size="lg" fontSize="md" isLoading={loading} type="submit">
                      Sign in 
                    </Button>
                  </Stack>
                </Stack>
              </Box>
            </Stack>
          </Container>
        )}
    </Formik>
  );
};

export default LoginScreen;