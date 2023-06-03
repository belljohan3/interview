import express, { json } from 'express'
import { writeFile } from 'fs'

const app = express()
const port = 3000

app.use(json())

// Define a route to handle the JSON file update
app.post('src/assets/projects.json', (req, res) => {
  const jsonData = req.body
  const jsonString = JSON.stringify(jsonData, null, 2) // Use 2 spaces for indentation

  writeFile('src/assets/projects.json', jsonString, 'utf8', (err) => {
    if (err) {
      console.error(err)
      return res.status(500).json({ error: 'Failed to update JSON file.' })
    }

    return res.json({ success: true })
  })
})

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
