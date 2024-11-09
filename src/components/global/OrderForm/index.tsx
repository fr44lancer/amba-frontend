import React from 'react';
import { Form, Input } from 'antd';
import BlackButton from '@/components/common/Buttons/BlackButton';

interface ContactFormProps {
  onSubmit: (values: ContactFormValues) => void;
}

interface ContactFormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const [form] = Form.useForm();

  const handleFinish = (values: ContactFormValues) => {
    onSubmit(values);
    form.resetFields(); // Reset the form after submission
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={handleFinish}
      style={{ maxWidth: 500, margin: '0 auto' }}
    >
      <Form.Item
        label="Անուն"
        name="name"
        rules={[
          { required: true, message: 'Խնդրում ենք մուտքագրել ձեր անունը' },
        ]}
      >
        <Input placeholder="Ձեր անունը" />
      </Form.Item>

      <Form.Item
        label="Հեռախոս"
        name="phone"
        rules={[
          {
            required: true,
            message: 'Խնդրում ենք մուտքագրել ձեր հեռախոսահամարը',
          },
        ]}
      >
        <Input placeholder="Ձեր հեռախոսահամարը" />
      </Form.Item>

      <Form.Item>
        <BlackButton htmlType="submit" style={{ width: '100%' }}>
          Ուղարկել
        </BlackButton>
      </Form.Item>
    </Form>
  );
};

export default ContactForm;
