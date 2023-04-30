import {
  Box, 
  Button,
  FormControl,
  Heading,
  HStack,
  Stack,
  Text,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Alert,
  Flex,
  Card,
  CardHeader,
  CardBody,
  StackDivider, 
  useToast
 } from "@chakra-ui/react";
import TextField from "../components/TextField";
import PasswordTextField from "../components/PasswordTextField";
import { useEffect, useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile, resetUpdateSuccess } from "../redux/actions/userActions";
import { useLocation } from "react-router";
import { Navigate } from "react-router-dom";



const ProfileScreen = () => {

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const { userInfo, error, loading, updateSuccess } = user;
  const location = useLocation();
  const toast = useToast();

  return userInfo ? 
  
  <Formik 
      initialValues={{email: "", password: "", name: ""}}
      validationSchema={Yup.object({
        name: Yup.string().required("A name address is required."),
        email: Yup.string().email("Invalid email.").required("An email address is required."),
        password: Yup.string().min(1, "Password is too short - your password must contain at least one character").required("Password is required."),
        confirmPassword: Yup.string().min(1, "Password is too short - your password must contain at least one character").required("Password is required.").oneOf([Yup.ref("password"), null], "Passwords must match"),
      })} 
      onSubmit={(values) => {
        dispatch();
      }}>
        {(formik)=> (
          <Box 
            minH="100vh"
            maxW={{base: "3xl", lg: "7xl"}} 
            mx="auto" 
            px={{base: "4", md: "8", lg:"12"}}
            py={{base: "6", md: "8", lg:"12"}}
          >
            <Stack direction={{base: "column", lg: "row"}} align={{lg: "flex-start"}}>
              <Stack pr={{base: "0", md: "10"}} flex="1.5" mb={{base: "2xl", md: "none"}}>
                <Heading fontSize="2xl" fontWeight="extrabold">
                    Profile
                </Heading>
                <Stack spacing="6">
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
                        <TextField type="text" name="name" placeholder="Your first and last name" label=" Fullname"/>
                        <TextField type="text" name="email" placeholder="you@example.com" label="Email" />
                        <PasswordTextField type="password" name="password" placeholder="your password" label="Password" />
                        <PasswordTextField type="password" name="confirmPassword" placeholder="Confirm your password" label=" Confirm your password" />
                      </FormControl>
                    </Stack>
                    <Stack spacing="6">
                      <Button color="orange" size="lg" fontSize="md" isLoading={loading} type="submit">
                        Save
                      </Button>
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
              <Flex direction="column" align="center" flex="1" _dark={{bg: "gray.900"}}>
                <Card>
                  <CardHeader>
                    <Heading size="md">
                      User Report
                    </Heading>
                  </CardHeader>
                  <CardBody>
                    <Stack divider={<StackDivider />} spacing="4">
                      <Box pt="2" fontSize="sm">
                        Registration {new Date(userInfo.createdAt).toDateString()}
                      </Box>
                    </Stack>
                  </CardBody>
                </Card>
              </Flex>
            </Stack>
          </Box>
        )}
    </Formik>
  : <Navigate to="/login" replace={true} state={{from: location}}/>;
};

export default ProfileScreen;