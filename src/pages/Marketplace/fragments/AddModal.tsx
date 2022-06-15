import React, { useEffect, useState } from 'react';

import { useDropzone } from 'react-dropzone';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Grid,
  Container,
  FormControl,
  Input,
  Button,
  Heading,
  Textarea,
  FormErrorMessage,
  Text,
  Box,
  Select,
} from '@chakra-ui/react';

import { Formik, Field, Form } from 'formik';
import { postProducts } from '../api/apihandler';
import { FetchMessagePost } from '../../Pengajuan/TamuGuru/fragments/FetchMessages';

export default function AddModal({ isOpen, onOpen, onClose, reload }: any) {
  const [fetchCondition, setCondition] = useState('');
  const [message, setMessage] = useState('');

  const postHandler = async (values: any, actions: any) => {
    let run = await postProducts(values);

    setCondition(run.status);
    setMessage(run.message);

    if (run.status === 'success') {
      actions.resetForm();
      setTimeout(() => onClose(), 500);
      setTimeout(() => reload(), 1000);
      return;
    }
    return;
  };

  useEffect(() => {
    setCondition('');
    setMessage('');
  }, []);

  return (
    <Modal
      onClose={onClose}
      isOpen={isOpen}
      isCentered
      blockScrollOnMount={false}
      motionPreset="scale"
      size="md"
    >
      <ModalOverlay />
      <ModalContent borderRadius="20px">
        <ModalBody p={8}>
          <FetchMessagePost condition={fetchCondition} message={message} />
          <Formik
            initialValues={{
              image: null,
              name: '',
              price: '',
              description: '',
              status: '',
            }}
            onSubmit={async (values, actions) => {
              await postHandler(values, actions)
              console.log(values)
            }}
          >
            {(props) => (
              <Form>
                <UploadComponent setFieldValue={props.setFieldValue} />
                {/* <Field name="image">
                  {({ field, form }: any) => (
                    <FormControl
                      my={2}
                      isInvalid={form.errors.image && form.touched.image}
                    >
                      <Input
                        {...field}
                        id="image"
                        type="file"
                        placeholder="Nama barang"
                        borderRadius="20px"
                        focusBorderColor="red_darker"
                        accept="image/png, image/jpeg"
                      />
                      <FormErrorMessage>{form.errors.image}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field> */}
                <Field name="name">
                  {({ field, form }: any) => (
                    <FormControl
                      my={2}
                      isInvalid={form.errors.name && form.touched.name}
                    >
                      <Input
                        {...field}
                        id="name"
                        type="text"
                        placeholder="Nama barang"
                        borderRadius="20px"
                        focusBorderColor="red_darker"
                      />
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="price">
                  {({ field, form }: any) => (
                    <FormControl
                      my={2}
                      isInvalid={form.errors.price && form.touched.price}
                    >
                      <Input
                        {...field}
                        id="price"
                        type="number"
                        placeholder="Harga barang"
                        borderRadius="20px"
                        focusBorderColor="red_darker"
                      />
                      <FormErrorMessage>{form.errors.price}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name="description">
                  {({ field, form }: any) => (
                    <FormControl
                      my={2}
                      isInvalid={
                        form.errors.description && form.touched.description
                      }
                    >
                      <Textarea
                        {...field}
                        id="description"
                        type="text"
                        placeholder="Deskripsi"
                        borderRadius="20px"
                        focusBorderColor="red_darker"
                      />
                      <FormErrorMessage>
                        {form.errors.description}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                
                <Field name="status">
                  {({ field, form }: any) => (
                    <FormControl
                      my={2}
                      isInvalid={form.errors.status && form.touched.status}
                    >
                      <Select
                        {...field}
                        id="status"
                        type="text"
                        borderRadius="20px"
                        focusBorderColor="red_darker"
                      >
                        <option value="" selected hidden>
                          Status
                        </option>
                        <option value="available">Tersedia</option>
                        <option value="empty">Kosong</option>
                        <option value="hide">Tersembunyi</option>
                      </Select>
                      <FormErrorMessage>{form.errors.status}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                

                <Button
                  variant="outline"
                  borderColor="teal_custom"
                  fontWeight={500}
                  p={6}
                  borderRadius="full"
                  color="teal_custom"
                  onClick={onClose}
                >
                  Batal
                </Button>
                <Button
                  ml={3}
                  type="submit"
                  isLoading={props.isSubmitting}
                  bg="teal_custom"
                  _hover={{ bg: 'teal_custom' }}
                  colorScheme="teal"
                  fontWeight={500}
                  p={6}
                  borderRadius="full"
                >
                  Tambah
                </Button>
              </Form>
            )}
          </Formik>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

const UploadComponent = (props: any) => {
  const [file, setFilename] = useState('');
  const { setFieldValue } = props;
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { 'image/*' : []},
    onDrop: (acceptedFiles) => {
      setFieldValue('image', acceptedFiles[0]);
      setFilename(acceptedFiles[0].name)
      // console.log(temporaryUrl)
    },
    multiple: false,
    
  });
  // console.log(getInputProps)
  return (
    <div {...getRootProps({ className: 'dropzone' })}>
      {/* <input {...getInputProps} /> */}
      <Box
        h={40}
        w="full"
        border={isDragActive ? '8px' : '0'}
        borderColor='grey'
        bgColor="grey_bg"
        borderRadius="3xl"
        textAlign="center"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDir="column"
        {...getInputProps}
        transition='border 150ms'
      >
        {isDragActive ? (
          <Text as="h6" color="grey">
            Drop filenya
          </Text>
        ) : (
          <Text as="h6">
            Tarik gambar kesini atau{' '}
            <strong style={{ color: 'red', cursor: 'pointer' }}>Upload</strong>
          </Text>
        )}
        {file ?  `File name: ${file}` : " "}
      </Box>
    </div>
  );
};
