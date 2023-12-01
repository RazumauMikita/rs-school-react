import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { reactHookFormSlice } from '../../../store/reducers/reactHookFormSlice';
import { schema } from '../../../utils/validation/validationSchema';
import { genderList } from '../../../utils/data/genderList';
import { ROUTES } from '../../../utils/constants/constants';
import { FormData } from '../../../utils/validation/validationSchema';
import styles from './ReactHookForm.module.css';
import { selectData } from '../../../store/reducers/selector';
import { dataSlice } from '../../../store/reducers/dataSlice';

import MyRHFInput from '../../MyInputs/MyRHFInput/MyRHFInput';
import MyRHFSelect from '../../MySelect/MyRHFSelect/MyRHFSelect';

const ReactHookForm: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { setImage, setData } = reactHookFormSlice.actions;
  const { setSuccessSubmitRHForm } = dataSlice.actions;
  const { countryList } = useAppSelector(selectData);

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
        <MyRHFInput
          name={'name'}
          type={'text'}
          register={register}
          errors={errors}
          title={'Name'}
        />
        <MyRHFInput
          name={'age'}
          type={'number'}
          register={register}
          errors={errors}
          title={'Age'}
        />

        <MyRHFInput
          name={'email'}
          type={'email'}
          register={register}
          errors={errors}
          title="Email"
        />

        <MyRHFInput
          name={'password'}
          type={'password'}
          register={register}
          errors={errors}
          title="Password"
        />

        <MyRHFInput
          name={'confirmPassword'}
          type={'password'}
          register={register}
          errors={errors}
          title="Confirm password"
        />

        <MyRHFInput
          name={'image'}
          type={'file'}
          register={register}
          errors={errors}
          title="Image"
        />

        <MyRHFSelect
          name={'gender'}
          options={genderList}
          title={'Gender'}
          errors={errors}
          register={register}
        />

        <MyRHFSelect
          name={'country'}
          options={countryList}
          title={'Country'}
          errors={errors}
          register={register}
        />

        <MyRHFInput
          name={'accept'}
          type={'checkbox'}
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
