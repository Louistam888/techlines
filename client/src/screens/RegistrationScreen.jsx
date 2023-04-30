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
  return (
    <div>RegistrationScreen</div>
  )
}

export default RegistrationScreen