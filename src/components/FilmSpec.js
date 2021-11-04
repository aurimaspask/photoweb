import React, { useState, useRef, Overlay } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { OverlayTrigger, Tooltip, Button } from 'react-bootstrap';

export default function Spec() {
    const [show, setShow] = useState(false);
    const target = useRef(null);
  
    return (
      <>
        <Button ref={target} onClick={() => setShow(!show)}>
          Film Specs
        </Button>
        <Overlay target={target.current} show={show} placement="right">
          {(props) => (
            <Tooltip id="overlay-film" {...props}>
              Film Specs
            </Tooltip>
          )}
        </Overlay>
      </>
    );
  }
  
