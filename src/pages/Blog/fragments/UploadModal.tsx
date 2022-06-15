import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Textarea,
  Box,
  Text,
  FormControl,
  FormErrorMessage,
} from '@chakra-ui/react';
import { Form, Field, Formik } from 'formik';
import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { postBlog } from '../api/apihandler';

export default function UploadModal({ isOpen, onOpen, onClose, reload }: any) {
  const [fetchCondition, setCondition] = useState('');
  const [message, setMessage] = useState('');

  const postHandler = async (values: any, actions: any) => {
    let run = await postBlog(values);

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

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      blockScrollOnMount={false}
      isCentered
    >
      <ModalOverlay />
      <ModalContent borderRadius="3xl">
        <ModalBody py={4}>
          <Formik
            initialValues={{
              image: null,
              newsTitle: '',
              description: '',
            }}
            onSubmit={async (values, actions) => {
              await postHandler(values, actions);
              // console.log(values);
            }}
          >
            {(props) => (
              <Form>
                <UploadComponent setFieldValue={props.setFieldValue} />
                <Field name="newsTitle">
                  {({ field, form }: any) => (
                    <FormControl
                      my={2}
                      isInvalid={
                        form.errors.newsTitle && form.touched.newsTitle
                      }
                    >
                      <Input
                        {...field}
                        id="newsTitle"
                        type="text"
                        placeholder="Judul"
                        borderRadius="20px"
                        focusBorderColor="red_darker"
                      />
                      <FormErrorMessage>
                        {form.errors.newsTitle}
                      </FormErrorMessage>
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
                        placeholder="Caption/description"
                        borderRadius="20px"
                        focusBorderColor="red_darker"
                      />
                      <FormErrorMessage>
                        {form.errors.description}
                      </FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <ModalFooter>
                  <Button
                    variant="outline"
                    borderColor="teal_custom"
                    mr={3}
                    fontWeight={500}
                    borderRadius="full"
                    color="teal_custom"
                    onClick={onClose}
                  >
                    Close
                  </Button>
                  <Button
                    isLoading={props.isSubmitting}
                    type="submit"
                    borderColor="teal_custom"
                    mr={3}
                    fontWeight={500}
                    borderRadius="full"
                    bg="teal_custom"
                    colorScheme="teal"
                    _hover={{ bg: 'teal_customdarker' }}
                    _pressed={{ bg: 'teal_custompress' }}
                    color="white"
                  >
                    Posting
                  </Button>
                </ModalFooter>
              </Form>
            )}
          </Formik>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

const UploadComponent = (props: any) => {
  const [file, setFileName] = useState('');
  const { setFieldValue } = props;
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { 'image/*': [] },
    onDrop: (acceptedFiles) => {
      setFieldValue('image', acceptedFiles[0]);
      setFileName(acceptedFiles[0].name);
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
        borderColor="grey"
        bgColor="grey_bg"
        borderRadius="3xl"
        textAlign="center"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDir="column"
        {...getInputProps}
        transition="border 150ms"
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
        {file ? `File Name: ${file}` : ' '}
      </Box>
    </div>
  );
};
