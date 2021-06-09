import AsyncStorage from '@react-native-async-storage/async-storage'

// set and get function accepts only objects since we don't need to store strings

export async function setLocalData(key: string, value: string) {
  try {
    await AsyncStorage.setItem(key, value)
  } catch (error) {
    console.info(error)
  }
}

export async function getLocalData(key: string) {
  try {
    const value: string | null = await AsyncStorage.getItem(key)
    return value ? JSON.parse(value) : null
  } catch (error) {
    console.info(error)
  }
}

export const LOCALSTORAGE_KEYS = {
  STARTUP_PROGRESS: '@startup_progress'
}
