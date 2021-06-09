// import CheckBoxComponent from "components/CheckBox";
import React, { useCallback, useEffect, useState } from 'react'
import { Alert, View } from 'react-native'
import {
  getLocalData,
  setLocalData,
  LOCALSTORAGE_KEYS
} from '../../utils/asyncStorage'
import CheckBoxComponent from '../../components/CheckBox'
import { HomepageSection } from '../../sections/Homepage'
import { SHeading } from './styled'
import { getFact } from '../../api/facts'

interface IData {
  section: string
  isComplete: boolean
  order: number
  items: {
    value: string
    checked: boolean
    id: string
  }[]
}

const initialData: IData[] = [
  {
    section: 'Foundation',
    isComplete: false,
    order: 1,
    items: [
      {
        value: 'setup virtual office',
        checked: true,
        id: '223'
      },
      {
        value: 'set mission & vision',
        checked: false,
        id: '2453'
      },
      {
        value: 'Select business name',
        checked: true,
        id: '22123'
      },
      {
        value: 'buy domains',
        checked: false,
        id: '2323'
      }
    ]
  },
  {
    section: 'Discovery',
    isComplete: false,
    order: 2,
    items: [
      {
        value: 'Create a roadmap',
        checked: false,
        id: '202'
      },
      {
        value: 'Competitor analysis',
        checked: false,
        id: '101'
      }
    ]
  },
  {
    section: 'Delivery',
    isComplete: false,
    order: 3,
    items: [
      {
        value: 'Release marketing website',
        checked: false,
        id: '33302'
      },
      {
        value: 'Release MVP',
        checked: false,
        id: '101000'
      }
    ]
  },
  {
    section: 'testing',
    isComplete: false,
    order: 4,
    items: [
      {
        value: 'testing 1',
        checked: false,
        id: '3330211'
      },
      {
        value: 'Testing 2',
        checked: false,
        id: '10100000'
      }
    ]
  }
]

export default function Homepage() {
  const [data, setData] = useState(initialData)
  const [checkStatus, setCheckStatus] = useState<
    Record<string, { isComplete: boolean }>
  >(
    initialData.reduce(
      (o, item) => ({ ...o, [item.order]: { isComplete: item.isComplete } }),
      {}
    )
  )

  const popAlert = (values: {
    title: string
    message: string
    cancelText: string
    okText: string
    onCancel?: () => void
    onOk?: () => void
  }) =>
    Alert.alert(values.title, values.message, [
      {
        text: values.cancelText,
        onPress: () => values?.onCancel && values.onCancel(),
        style: 'cancel'
      },
      { text: values.okText, onPress: () => values?.onOk && values.onOk() }
    ])

  const handleIconCheck = useCallback((items: typeof initialData) => {
    items.map(item => {
      const isComplete = !item.items
        .map(subItem => subItem.checked)
        .includes(false)
      setCheckStatus(prevState => ({
        ...prevState,
        [item.order]: {
          isComplete
        }
      }))
    })
  }, [])

  const checkProgressStatus = useCallback(
    async (status: Record<string, { isComplete: boolean }>) => {
      const boolArr = Object.values(status).map(item => item.isComplete)

      if (!boolArr.includes(false)) {
        const res = await getFact()
        if (res) {
          popAlert({
            title: 'Random fact',
            message: res.text,
            cancelText: 'Cancel',
            okText: 'Ok'
          })
        }
      }
    },
    []
  )

  async function checkLocalData() {
    const localData = await getLocalData(LOCALSTORAGE_KEYS.STARTUP_PROGRESS)
    if (localData) {
      setData(localData)
    }
  }

  async function handleChange(id: string, parent: string) {
    const updatedData = data.map(item => {
      if (item.section === parent) {
        return {
          ...item,
          items: item.items.map(subItem => {
            if (subItem.id === id) {
              return {
                ...subItem,
                checked: !subItem.checked
              }
            } else {
              return subItem
            }
          }) as { id: string; checked: boolean; value: string }[]
        }
      } else {
        return item
      }
    })
    setData(updatedData)
    await setLocalData(
      LOCALSTORAGE_KEYS.STARTUP_PROGRESS,
      JSON.stringify(updatedData)
    )
  }

  useEffect(() => {
    checkProgressStatus(checkStatus)
  }, [checkStatus, checkProgressStatus])

  useEffect(() => {
    checkLocalData()
  }, [])

  useEffect(() => {
    handleIconCheck(data)
  }, [data, handleIconCheck])
  return (
    <View>
      <SHeading>My startup progress</SHeading>
      {data.map(item => {
        return (
          <HomepageSection
            title={item.section}
            index={item.order}
            key={item.order}
            isComplete={checkStatus[item.order].isComplete}
          >
            {item.items.map(subItem => {
              return (
                <CheckBoxComponent
                  disabled={
                    item.order === 1
                      ? false
                      : checkStatus[item.order - 1].isComplete
                      ? false
                      : true
                  }
                  key={subItem.id}
                  text={subItem.value}
                  value={subItem.checked}
                  id={subItem.id}
                  parent={item.section}
                  onChange={handleChange}
                />
              )
            })}
          </HomepageSection>
        )
      })}
    </View>
  )
}
