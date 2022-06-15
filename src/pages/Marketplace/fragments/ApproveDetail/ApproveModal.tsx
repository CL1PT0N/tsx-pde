import React, { useState, useEffect } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalFooter,
  Button,
  Image,
  Text,
  Center,
  Icon,
} from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import ApproveVector from './ApproveVector';
export default function ApproveModal({
  isOpen,
  onClose,
}: any) {
  return (
    <Modal
      size="sm"
      isOpen={isOpen}
      onClose={onClose}
      blockScrollOnMount={false}
      isCentered
    >
      <ModalOverlay />
      <ModalContent borderRadius="3xl" py={8}>
        <ModalBody alignItems="center" textAlign="center">
          <Center>
            <Icon
              width="201"
              height="200"
              viewBox="0 0 201 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ApproveVector />
            </Icon>
          </Center>
          <Text as="h3" fontSize={23} fontWeight={600}>
            Setujui transaksi?
          </Text>
          {/* <FetchMessageDelete condition={fetchCondition} message={message} /> */}
          <Text as="h6" fontSize={16} fontWeight={400}>
            Apa anda yakin approve transaksi ini?
          </Text>
          {/* <FetchMessageEdit condition={fetchCondition} message={message} /> */}
        </ModalBody>
        <Formik
          initialValues={{
            param: '',
          }}
          onSubmit={async (values, actions) => {
            // await approveHandler(values.param, actions);
            console.log(values);
          }}
        >
          {(props) => (
            <Form>
              <ModalFooter justifyContent="center">
                <Button
                  variant="outline"
                  px="10%"
                  borderColor="teal_custom"
                  color="teal_custom"
                  mr={3}
                  onClick={onClose}
                  borderRadius="full"
                  fontWeight={500}
                >
                  Batal
                </Button>
                <Button
                  isLoading={props.isSubmitting}
                  type="submit"
                  px="10%"
                  borderRadius="full"
                  bg="teal_custom"
                  _hover={{ bg: 'teal_customdarker' }}
                  colorScheme="teal"
                >
                  Approve
                </Button>
              </ModalFooter>
            </Form>
          )}
        </Formik>
      </ModalContent>
    </Modal>
  );
}
