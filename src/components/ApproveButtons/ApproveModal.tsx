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

import ApproveVector from '../ApproveVector';
import { approveSub } from './approveapi';
import { FetchMessageEdit } from '../../pages/Pengajuan/BursaKerja/fragments/FetchMessage';

export default function ApproveModal({
  isOpen,
  onOpen,
  onClose,
  payload,
  reload,
}: any) {
  const [fetchCondition, setCondition] = useState('');
  const [message, setMessage] = useState('');

  const approveHandler = async (values: string, actions: any) => {
    let run = await approveSub(values);
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
            Approve pengajuan?
          </Text>
          {/* <FetchMessageDelete condition={fetchCondition} message={message} /> */}
          <Text as="h6" fontSize={16} fontWeight={400}>
            Apa anda yakin approve pengajuan ini?
          </Text>
          <FetchMessageEdit condition={fetchCondition} message={message} />
        </ModalBody>
        <Formik
          initialValues={{
            param: payload,
          }}
          onSubmit={async (values, actions) => {
            await approveHandler(values.param, actions);
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
