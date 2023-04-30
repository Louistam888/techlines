import {
  Box,
  Button,
  Container,
  FormControl, 
  Heading, 
  HStack,
  Stack,
  Text,
  useBreakPointValue,
  useColorModeValue as mode, 
  AlertIcon, 
  AlertTitle,
  AlertDescription,
  useToast
} from "@chakra-ui/react";
import TextField from "../components/TextField";
import PasswordTextField from "../components/"
import { useState, useEffect } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../redux/actions/userActions";
 
const RegistrationScreen = () => {

  
  const headingBR = useBreakpointValue({base: "xs", md:"sm"});
  const boxBR = useBreakpointValue({base: "transparent", md: "bg-surface"});

  return (
    <Formik 
      initialValues={{email: "", password: "", name: ""}}
      validationSchema={Yup.object({
        name: Yup.string().min.required("A name address is required."),
        email: Yup.string().email("Invalid email.").required("An email address is required."),
        password: Yup.string().min(1, "Password is too short - your password must contain at least one character").required("Password is required."),
        confirmPassword: Yup.string().min(1, "Password is too short - your password must contain at least one character").required("Password is required.").oneOf([Yup.ref("password"), null], "Passwords must match"),
      })} 
      onSubmit={(values) => {
        dispatch(login(values.name, values.email, values.password));
      }}>
        {(formik)=> (
          <Container maxW="lg" py={{base: "12", md: "24"}} px={{base:"0", md:"8"}} minH="4xl">
            <Stack spacing="8">
              <Stack spacing="6">
                <Stack spacing={{base: "2", md: "3"}} textAlign="center">
                  <Heading size={{headingBR}}>
                    Create an account
                  </Heading>
                  <HStack spacing="1" justify="center">
                    <Text color="muted">
                      Already a user?
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
                      <TextField type="text" name="name" placeholder="Your first and last name" label="Full name" />
                      <TextField type="text" name="email" placeholder="you@example.com" label="Email" />
                      <PasswordTextField type="password" name="password" placeholder="your password" label="Password" />
                      <PasswordTextField type="password" name="confirmPassword" placeholder="Confirm your password" label=" Confirm your password" />
                    </FormControl>
                  </Stack>
                  <Stack spacing="6">
                    <Button colorScheme="orange" size="lg" fontSize="md" isLoading={loading} type="submit">
                      Sign up
                    </Button>
                  </Stack>
                </Stack>
              </Box>
            </Stack>
          </Container>
        )}
    </Formik>
  )
}

export default RegistrationScreen;