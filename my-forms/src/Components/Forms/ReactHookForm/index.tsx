import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';

import { reactHookFormSlice } from '../../../store/reducers/reactHookFormSlice';
import { dataSlice } from '../../../store/reducers/dataSlice';

import { useAppDispatch } from '../../../hooks/hooks';

import { schema } from '../../../utils/validation/validationSchema';
import { genderList } from '../../../utils/data/genderList';
import { ROUTES } from '../../../utils/constants/constants';
import { FormData } from '../../../utils/validation/validationSchema';

import StyledRHFInput from '../../MyInputs/StyledRHFInput';
import StyledRHFSelect from '../../MySelect/StyledRHFSelect';

import styles from './ReactHookForm.module.css';
import AutocompleteRHFInput from '../../MyInputs/AutocompleteRHFInput';

const ReactHookForm: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { setImage, setData } = reactHookFormSlice.actions;
  const { setSuccessSubmitRHForm } = dataSlice.actions;

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: yupResolver(schema), mode: 'all' });

  const onSubmit = handleSubmit((data: FormData) => {
    dispatch(setData(data));

    const imageFiles = data.image as FileList;
    const reader = new FileReader();
    reader.readAsDataURL(imageFiles[0]);
    reader.onloadend = () => dispatch(setImage(reader.result as string));

    dispatch(setSuccessSubmitRHForm(true));
    setTimeout(() => {
      dispatch(setSuccessSubmitRHForm(false));
    }, 3000);
    navigate(ROUTES.MAIN_PAGE);
  });

  return (
    <>
      <form onSubmit={onSubmit} className={styles.formContainer}>
        <StyledRHFInput
          name="name"
          type="text"
          register={register}
          errors={errors}
          title="Name"
        />
        <StyledRHFInput
          name="age"
          type="number"
          register={register}
          errors={errors}
          title="Age"
        />

        <StyledRHFInput
          name="email"
          type="email"
          register={register}
          errors={errors}
          title="Email"
        />

        <StyledRHFInput
          name="password"
          type="password"
          register={register}
          errors={errors}
          title="Password"
        />

        <StyledRHFInput
          name="confirmPassword"
          type="password"
          register={register}
          errors={errors}
          title="Confirm password"
        />

        <StyledRHFInput
          name="image"
          type="file"
          register={register}
          errors={errors}
          title="Image"
        />

        <StyledRHFSelect
          name="gender"
          options={genderList}
          title="Gender"
          errors={errors}
          register={register}
        />

        <AutocompleteRHFInput
          name="country"
          title="Country"
          type="text"
          errors={errors}
          register={register}
        />

        <StyledRHFInput
          name="accept"
          type="checkbox"
          register={register}
          errors={errors}
          title="Accept"
        />

        <button type="submit" disabled={!isValid}>
          Submit
        </button>
      </form>
    </>
  );
};

export default ReactHookForm;
