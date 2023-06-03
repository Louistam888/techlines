import {
  Tr,
  Td,
  Button,
  VStack,
  Textarea,
  Tooltip,
  Input,
  FormControl,
  Switch,
  FormLabel,
  Text,
  Badge,
} from "@chakra-ui/react";
import { useState } from "react";
import { MdDriveFolderUpload } from "react-icons/md";
import { useDispatch } from "react-redux";
import { uploadProduct } from "../redux/actions/adminActions";

const AddNewProduct = () => {
  const [brand, setBrand] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState("");
  const [price, setPrice] = useState("");
  const [productIsNew, setProductIsNew] = useState(false);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const createNewProduct = () => {
    dispatch(uploadProduct({ brand, name, category, stock, price, image, productIsNew, description }));
  };

  return (
    <Tr>
      <Td>
        <Text fontSize="sm">Image File Name</Text>
        <Tooltip label={"Set the name of your image i.e. iPhone.jpg"} fontSize="sm">
          <Input size="sm" value={image} onChange={(e) => setImage(e.target.value)} placeholder="i.e. iphone.jpg" />
        </Tooltip>
      </Td>
      <Td>
        <Text fontSize="sm">Description</Text>
        <Textarea
          value={description}
          w="270px"
          h="120px"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          placeholder="Description"
          size="sm"
        />
      </Td>
      <Td>
        <Text fontSize="sm">Brand</Text>
        <Input size="sm" value={brand} onChange={(e) => setBrand(e.target.value)} placeholder="i.e. Apple" />
        <Text fontSize="sm">Name</Text>
        <Input size="sm" value={name} onChange={(e) => setName(e.target.value)} placeholder="i.e. iPhone 10" />
      </Td>
      <Td>
        <Text fontSize="sm">Category</Text>
        <Input size="sm" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="i.e. Tablet" />
        <Text fontSize="sm">Price</Text>
        <Input size="sm" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="set price" />
      </Td>
    </Tr>
  );
};

export default AddNewProduct;
