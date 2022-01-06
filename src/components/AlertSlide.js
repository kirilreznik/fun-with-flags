import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { useContext } from "react";
import AppContext from "../context/app-context";
import { Box } from "@material-ui/core";
import AlertImgBox from "../Styles/styled-components/AlertImgBox";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
  const handleClose = () => {
    dispatch({ type: "CLOSE_ALERT" });
  };
  const { state, dispatch } = useContext(AppContext);
  return (
    <div>
      <Dialog
        align="center"
        open={state.openAlert}
        TransitionComponent={Transition}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
      >
        <AlertImgBox />
        <DialogTitle align="center">{"GAME OVER"}</DialogTitle>
        <Box align="center">
          <DialogActions style={{ justifyContent: "center" }}>
            <Button
              onClick={() => {
                dispatch({ type: "CLEAR_STATE" });
                dispatch({ type: "GET_OPTIONS" });
                dispatch({ type: "SET_COUNTRY" });
                dispatch({ type: "SET_STATUS_PLAYING" });
              }}
            >
              LETS TRY AGAIN
            </Button>
            <Button onClick={handleClose}>Agree</Button>
          </DialogActions>
        </Box>
      </Dialog>
    </div>
  );
}
