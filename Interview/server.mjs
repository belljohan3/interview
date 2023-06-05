import express, { json } from 'express'
import cors from 'cors'
import { readFile, writeFile } from 'fs'
const app = express()
const port = 3000

app.use(json())
app.use(cors())

app.post('/api/save-data', (req, res) => {
  const newData = req.body

  // Read existing data from the JSON file
  readFile('src/assets/projects.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err)
      return res.status(500).json({ error: 'Failed to save data' })
    }

    let existingData = []
    if (data) {
      existingData = JSON.parse(data)
    }

    // Append the new data to the existing data
    existingData.unshift(newData)

    // Write the updated data back to the JSON file
    writeFile('src/assets/projects.json', JSON.stringify(existingData), 'utf8', (err) => {
      if (err) {
        console.error('Error writing to file:', err)
        res.status(500).json({ error: 'Failed to save data' })
      } else {
        console.log('Data saved successfully!')
        res.json({ message: 'Data saved successfully' })
      }
    })
  })
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
