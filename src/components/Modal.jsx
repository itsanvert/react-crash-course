import classes from "./Modal.module.css";

function Modal(props) {
  return (
    <>
      <div className={classes.backdrop} onClick={props.onClose} />
      <dialog className={classes.modal} open>
        {props.children}
      </dialog>
    </>
  );
}

export default Modal;
