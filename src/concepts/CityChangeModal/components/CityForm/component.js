// @flow
import React from 'react';
import { useFormik } from 'formik';
import { string, object } from 'yup';
import styled from 'styled-components/native';
import { Keyboard } from 'react-native';

type CityFormProps = {
  handleSetNewCity: Function
};

const CityForm = ({ handleSetNewCity }: CityFormProps) => {
  const {
    handleSubmit,
    handleChange,
    values: { city },
    errors,
    setFieldValue,
    setFieldTouched,
    touched
  } = useFormik({
    initialValues: {
      city: ''
    },
    validationSchema: object({
      city: string()
        .min(4, 'Must be 4 characters or more')
        .required('Required')
    }),
    onSubmit: (values) => {
      handleSetNewCity(values.city);
      setFieldTouched('city', false);
      setFieldValue('city', '');
    }
  });

  return (
    <TouchBlock onPress={Keyboard.dismiss} accessible={false}>
      <Wrapper>
        <InputBlock>
          <InputBlock.CityInput
            onChangeText={handleChange('city')}
            placeholderTextColor="black"
            value={city}
            placeholder="Please, add new city..."
          />
        </InputBlock>
        {touched.city && errors.city ? (
          <Wrapper.ButtonOk.errorText>{errors.city}</Wrapper.ButtonOk.errorText>
        ) : null}
        <Wrapper.ButtonOk onPress={handleSubmit}>
          <Wrapper.ButtonOk.ButtonText>Add City</Wrapper.ButtonOk.ButtonText>
        </Wrapper.ButtonOk>
      </Wrapper>
    </TouchBlock>
  );
};

const Wrapper = styled.View`
  width: 100%;
  height: 100px;
  justify-content: flex-start;
  align-items: center;
`;

const InputBlock = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const TouchBlock = styled.TouchableWithoutFeedback``;

Wrapper.ButtonOk = styled.TouchableHighlight`
  width: 158px;
  height: 39px;
  background-color:${(props) => props.theme.backgroundColorButtonOk};
  margin-top: 30px;
`;

Wrapper.ButtonOk.ButtonText = styled.Text`
  color: ${(props) => props.theme.textColorWhite};
  font-size: 24px;
  text-align: center;
  font-family: 'simonetta-regular';
`;

Wrapper.ButtonOk.errorText = styled(Wrapper.ButtonOk.ButtonText)`
  color: ${(props) => props.theme.textColorRed};
`;

InputBlock.CityInput = styled.TextInput`
  font-family: 'simonetta-bold';
  font-size: 18px;
  border-bottom-color: ${(props) => props.theme.textColorBlack};
  border-bottom-width: 1px;
  height: 40px;
  width: 100%;
`;

export default CityForm;
