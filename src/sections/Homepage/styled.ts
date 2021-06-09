import { Text, View } from 'react-native'
import styled from 'styled-components/native'
import { size } from '../../utils/styles'
import { theme } from '../../utils/theme'
import { FontAwesome } from '@expo/vector-icons'

export const SHomepageWrapper = styled(View)`
  padding-bottom: ${size(6)};
`

export const SRow = styled(View)`
  margin: ${size(4)} 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

export const SHomepageHeading = styled(Text)`
  font-size: ${size(6)};
  font-weight: 600;
`

export const SHomepageCircle = styled(View)`
  width: ${size(8)};
  height: ${size(8)};
  background-color: ${theme.secondary};
  color: ${theme.white};
  font-size: ${size(5)};
  border-radius: ${size(4)};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: ${size(4)};
`

export const SCircleText = styled(Text)`
  color: ${theme.white};
  font-weight: 600;
  font-size: ${size(5)};
`

export const SIcon = styled(FontAwesome)`
  margin-left: ${size(8)};
`
