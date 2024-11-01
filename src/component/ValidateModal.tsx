import { Button, Modal } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useEffect, useState } from "react";
import Loading from "./Loading";
import { motion } from "framer-motion";

type Props = {
  open: boolean;
  setOpen: (arg: boolean) => void;
};

const ValidateModal = (props: Props) => {
  const [errorMessage, setErrorMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) {
    return <Loading />;
  }

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setErrorMessage(true);
      setIsLoading(false);
    }, 3000);
    setTimeout(() => {
      setErrorMessage(false);
    }, 6000);
  };

  return (
    <Modal
      footer={false}
      closeIcon={false}
      open={props.open}
      onClose={() => props.setOpen(false)}
      onCancel={() => props.setOpen(false)}
    >
      <div className="border-b pb-2">
        <p className="text-3xl font-semibold">Validate PI</p>
        <p className="capitalize text-base">Validate your pi to continue</p>
      </div>

      {errorMessage && (
        <motion.div
          initial={{
            y: 20,
          }}
          animate={{
            y: 0,
          }}
          className="error-msg border border-red-600 w-full bg-red-200 text-red-800 font-semibold p-4 py-2 rounded-lg"
        >
          Invalid Pass Phrase. Please try again
        </motion.div>
      )}

      <div className="flex flex-col gap-2 items-center mb-6 mt-2">
        <p className="">Please emter your 12/24 word phrase</p>

        <TextArea
          className="border-yellow-700"
          placeholder="Enter Your 12/24 word phrase"
          rows={6}
        />
        <p className="">Use ',' to separate wallet keys</p>
      </div>
      <div className="flex gap-2">
        <Button
          onClick={handleClick}
          className="h-12 w-full bg-gradient-to-r from-yellow-500 to-yellow-700 text-white font-semibold"
        >
          Unlock wallet with passphrase
        </Button>
        <Button className="h-12 w-full bg-gradient-to-r from-yellow-500 to-yellow-700 text-white font-semibold">
          Unlock wallet with fingerprint
        </Button>
      </div>
    </Modal>
  );
};

export default ValidateModal;
