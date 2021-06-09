import { View } from 'react-native'
import styled from 'styled-components/native'
import CheckBox from '@react-native-community/checkbox'

export const CheckboxWrapper = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const SCheckbox = styled(CheckBox)`
  transform: scale(0.8);
  margin-top: 5px;
`
