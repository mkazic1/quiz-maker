import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import {
  Typography,
  Dialog,
  DialogActions,
  DialogTitle,
  Button,
} from '@mui/material';
import { Delete } from '@mui/icons-material';
import LoadingButton from '@mui/lab/LoadingButton';
import {
  dialogActionStyle,
  iconStyle,
  titleTypographyStyle,
  dialogTitleBox,
} from '../style/ModalStyle';

const DeleteModal = ({
  isDialogOpened,
  setIsDialogOpened,
}) => {
  const [isSaving, setIsSaving] = useState(false);

  const handleClose = () => {
    setIsDialogOpened(false);
  };

  const onSubmitHandler = async () => {
    setIsSaving(false);
  };

  return (
    <Dialog
      open={isDialogOpened}
      onClose={handleClose}
      maxWidth="xs"
      fullWidth
    >
      <DialogTitle sx={dialogTitleBox}>
        <Delete sx={iconStyle} />
        <Typography variant="h5" component="span" sx={titleTypographyStyle}>
          Are you sure?
        </Typography>
      </DialogTitle>
      <DialogActions sx={dialogActionStyle}>
        <Button
          variant="outlined"
          onClick={handleClose}
        >
          Discard
        </Button>
        <LoadingButton
          loading={isSaving}
          variant="contained"
          disableElevation
          onClick={onSubmitHandler}
          disabled={isSaving}
        >
          Delete
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
};

DeleteModal.defaultProps = {
  isDialogOpened: false,
  setIsDialogOpened: null,
};

DeleteModal.propTypes = {
  isDialogOpened: PropTypes.bool,
  setIsDialogOpened: PropTypes.func,
};

export default DeleteModal;
