import axios from 'axios'
import dayjs from 'dayjs'

export const addData = (data: Object) => {
  const todayDate = dayjs().format()
  const dataToSave = {
    ...data,
    lastDate: todayDate
  }
  axios
    .post('http://localhost:3000/api/save-data', dataToSave)
    .then((response) => {
      console.log('Data and saved successfully')
    })
    .catch((error) => {
      console.error('Error saving data:', error)
    })
}
