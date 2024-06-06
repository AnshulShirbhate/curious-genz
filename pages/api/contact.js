import * as fs from 'fs'

export default async function handler(req, res) {
    if (req.method === 'POST') {
      // Process a POST request
      let files = await fs.promises.readdir("contactdata");
      let number = files.length + 1

      const data = JSON.stringify(req.body)
      fs.promises.writeFile(`contactdata/${number}.json`, data, ()=>{})
      res.status(200).json("Form Submitted")
    } else {
      // Handle any other HTTP method
      res.status(200).json("Fetched")
    }
  }