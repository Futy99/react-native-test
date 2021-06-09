import React from 'react'
import {
  SCircleText,
  SHomepageCircle,
  SHomepageHeading,
  SHomepageWrapper,
  SIcon,
  SRow
} from './styled'

export function HomepageSection(props: {
  title: string
  index: number
  isComplete: boolean
  children: React.ReactNode
}) {
  return (
    <SHomepageWrapper>
      <SRow>
        <SHomepageCircle>
          <SCircleText>{props.index}</SCircleText>
        </SHomepageCircle>
        <SHomepageHeading>{props.title}</SHomepageHeading>
        {props.isComplete && <SIcon name="check" size={48} color="black" />}
      </SRow>
      {props.children}
    </SHomepageWrapper>
  )
}
