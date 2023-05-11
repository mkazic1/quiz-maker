import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import {
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  FormControl,
} from '@mui/material';
import { Groups } from '@mui/icons-material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import LoadingButton from '@mui/lab/LoadingButton';
import {
  dialogActionStyle,
  iconStyle,
  titleTypographyStyle,
  dialogTitleBox,
  textfieldStyle,
} from '../style/ModalStyle';

const CreateQuizModal = ({ isDialogOpened, setIsDialogOpened }) => {
  const [isSaving, setIsSaving] = useState(false);

  const validationSchema = Yup.object().shape({
    name: Yup.string(),
    questions: Yup.string(),
  });

  const {
    register, handleSubmit, reset, formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onSubmit',
    defaultValues: {
      name: '',
      questions: '',
    },
  });

  const handleClose = () => {
    setIsDialogOpened(false);
    reset(
      {
        name: '',
        questions: '',
      },
    );
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
        <Groups sx={iconStyle} />
        <Typography variant="h5" component="span" sx={titleTypographyStyle}>
          Create new quiz
        </Typography>
      </DialogTitle>
      <FormControl component="form">
        <DialogContent>
          <TextField
            focused
            label="Name"
            {...register('name')}
            error={!!errors?.name}
            helperText={errors?.name?.message}
            sx={textfieldStyle}
          />
          <TextField
            focused
            label="Questions"
            {...register('questions')}
            error={!!errors?.questions}
            helperText={errors?.questions?.message}
            sx={textfieldStyle}
          />
        </DialogContent>
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
            onClick={handleSubmit(onSubmitHandler)}
            disabled={isSaving}
          >
            Save
          </LoadingButton>
        </DialogActions>
      </FormControl>
    </Dialog>
  );
};

CreateQuizModal.defaultProps = {
  isDialogOpened: false,
  setIsDialogOpened: null,
};

CreateQuizModal.propTypes = {
  isDialogOpened: PropTypes.bool,
  setIsDialogOpened: PropTypes.func,
};

export default CreateQuizModal;
