import React from 'react'
import { Text } from 'react-native'
import { CheckboxWrapper, SCheckbox } from './styled'
import { size } from '../../utils/styles'
import { theme } from '../../utils/theme'

export default function CheckBoxComponent(props: {
  value: boolean
  onChange: (id: string, parent: string) => void
  text: string
  id: string
  parent: string
  disabled: boolean
}) {
  return (
    <CheckboxWrapper>
      <SCheckbox
        tintColors={{ true: theme.primary }}
        onTintColor={theme.primary}
        onFillColor={theme.primary}
        onCheckColor={theme.white}
        value={props.value}
        boxType="square"
        onValueChange={() => props.onChange(props.id, props.parent)}
        disabled={props.disabled}
      />
      <Text style={{ marginLeft: size(2, true) }}>{props.text}</Text>
    </CheckboxWrapper>
  )
}
