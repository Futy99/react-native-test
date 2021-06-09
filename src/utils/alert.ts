import { Alert } from 'react-native'

export function AlertX(props: {
  title: string
  message: string
  cancelText: string
  okText: string
  onCancel?: () => void
  onOk?: () => void
}) {
  Alert.alert(props.title, props.message, [
    {
      text: props.cancelText,
      onPress: () => props?.onCancel && props.onCancel(),
      style: 'cancel'
    },
    { text: props.okText, onPress: () => props?.onOk && props.onOk() }
  ])
}
