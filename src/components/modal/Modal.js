import { Fragment } from "react";
import { useSelector } from "react-redux";
import ModalDetail from "./ModalDetail";
import Overlay from "./Overlay";

const Modal = () => {
  const product = useSelector((state) => state.modal.product);

  return (
    <Fragment>
      <Overlay />
      <ModalDetail product={product} />
    </Fragment>
  );
};
export default Modal;
