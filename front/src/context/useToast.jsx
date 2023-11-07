import { createContext, useContext, useState } from "react";
import { ToastContainer } from "react-bootstrap";
import Toast from "react-bootstrap/Toast";

const toastContext = createContext();

export function ToastsProvider(props) {
  const [show, setShow] = useState(false);
  const [config, setConfig] = useState({});
  const [bgColor, setBgColor] = useState("");

  function showToast(configToast, bgToast) {
    setConfig(configToast);
    setBgColor(bgToast);
    setShow(true);
  }

  return (
    <toastContext.Provider value={{ showToast }}>
      <ToastContainer position="top-end" className="p-3">
        <Toast
          className="text-light"
          bg={bgColor}
          onClose={() => setShow(false)}
          show={show}
          delay={4000}
          autohide
        >
          {config && config.titulo && (
            <Toast.Header>
              <strong className="me-auto">{config.titulo}</strong>
            </Toast.Header>
          )}
          {config && config.txt && <Toast.Body>{config.txt}</Toast.Body>}
        </Toast>
      </ToastContainer>
      {props.children}
    </toastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(toastContext);
  return context;
}
