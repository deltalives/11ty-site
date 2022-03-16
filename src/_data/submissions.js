const fs = require('fs')
const axios = require('axios')

const URL = 'https://delta-lives-strapi-backend.herokuapp.com/api/submissions?populate=media&&pagination[page]=1&pagination[pageSize]=40'
const getSubmissions = async () => {
  const response = (await axios.get(URL)).data
  let submissions = response.data.map(item => {
    if(item.attributes.media.data == null) return null
    
    const media = item.attributes.media.data[0].attributes
    let mediaUrl = media.url

    return {
      id: item.id,
      name: item.attributes.name,
      location: item.attributes.location,
      age: item.attributes.age,
      mediaType: media.provider_metadata.resource_type,
      mediaUrl: mediaUrl,
    }
  })

  submissions = submissions.filter(item => item != null)
  console.log(submissions.length)
  
  
  fs.writeFile('./list.json', JSON.stringify(submissions), () => {})
}
// getSubmissions()