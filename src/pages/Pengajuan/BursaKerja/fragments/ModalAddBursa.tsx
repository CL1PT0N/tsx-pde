import React, { useEffect, useState } from 'react';
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
} from '@chakra-ui/react';

import { Formik, Field, Form } from 'formik';
import {
  ValidateCondition,
  ValidateDate,
  ValidateDescription,
  ValidateJobtitle,
} from './validator';
import { postJobs } from './apihandler';
import { FetchMessagePost } from './FetchMessage';

export default function ModalBursa({ isOpen, onOpen, onClose, reload }: any) {
  const [fetchCondition, setCondition] = useState('');
  const [message, setMessage] = useState('');

  const postHandler = async (values: any, actions: any) => {
    let run = await postJobs(values);

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
      size="xl"
    >
      <ModalOverlay />
      <ModalContent borderRadius="20px">
        <ModalBody p={8}>
          <Heading fontSize={20}>Tambah Bursa Kerja</Heading>
          <FetchMessagePost condition={fetchCondition} message={message} />
          <Formik
            enableReinitialize
            initialValues={{
              jobTitle: '',
              date: '',
              description: '',
              condition: '',
            }}
            onSubmit={async (values, actions) => {
              await postHandler(values, actions);
            }}
          >
            {(props) => (
              <Form>
                <Container gridTemplateRows="repeat(2,1fr)" p={0}>
                  <Grid templateColumns="repeat(2, 1fr)" gap={5} my={3}>
                    <Field name="jobTitle" validate={ValidateJobtitle}>
                      {({ field, form }: any) => (
                        <FormControl
                          isInvalid={
                            form.errors.jobTitle && form.touched.jobTitle
                          }
                        >
                          <Input
                            {...field}
                            id="jobTitle"
                            type="text"
                            placeholder="Role Pekerjaan"
                            borderRadius="20px"
                            focusBorderColor="red_darker"
                          />
                          <FormErrorMessage>
                            {form.errors.jobTitle}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Field name="date" validate={ValidateDate}>
                      {({ field, form }: any) => (
                        <FormControl
                          isInvalid={form.errors.date && form.touched.date}
                        >
                          <Input
                            {...field}
                            id="date"
                            type="date"
                            borderRadius="20px"
                            focusBorderColor="red_darker"
                          />
                          <FormErrorMessage>
                            {form.errors.date}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Field name="description" validate={ValidateDescription}>
                      {({ field, form }: any) => (
                        <FormControl
                          isInvalid={
                            form.errors.description && form.touched.description
                          }
                        >
                          <Textarea
                            {...field}
                            id="description"
                            type="text"
                            placeholder="Deskripsi Pekerjaan"
                            borderRadius="20px"
                            focusBorderColor="red_darker"
                          />
                          <FormErrorMessage>
                            {form.errors.description}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Field name="condition" validate={ValidateCondition}>
                      {({ field, form }: any) => (
                        <FormControl
                          isInvalid={
                            form.errors.condition && form.touched.condition
                          }
                        >
                          <Textarea
                            {...field}
                            id="condition"
                            type="text"
                            placeholder="Persyaratan"
                            borderRadius="20px"
                            focusBorderColor="red_darker"
                          />
                          <FormErrorMessage>
                            {form.errors.condition}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                  </Grid>
                </Container>
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
