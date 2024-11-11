'use client';
import React from 'react';
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from '@/components/ui/animated-modal';
import { Col, Row } from 'antd';
import ContactForm from '@/components/global/OrderForm';

interface ContactFormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export function OrderModal() {
  const handleFormSubmit = (values: ContactFormValues) => {
    console.log('Form values:', values);
    // Handle form submission (e.g., send to backend)
  };

  return (
    <div className="py-0  flex items-center justify-center ">
      <Modal>
        <ModalTrigger className="bg-black  text-xs text-white flex justify-center group/modal-btn">
          <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
            Պատվիրել Հիմա
          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
            Պատվիրել Հիմա
          </div>
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
              Բարձրացրեք ձեր պահեստավորման ստանդարտները այսօր
            </h4>
            <Row gutter={[16, 16]} justify="center">
              <Col xs={24}>
                <ContactForm onSubmit={handleFormSubmit} />
              </Col>
            </Row>
          </ModalContent>
        </ModalBody>
      </Modal>
    </div>
  );
}
