import axios from 'axios'
import existingComponents from './.components.json' assert { type: 'json' }

const host = 'https://siteadmin-dev.yojji.io'

async function main() {
  const response = await axios.get(host + '/api/content-type-builder/components');
  const components = response.data.data
  console.log(components.length)
  const remoteComponents = components.map(c => c.uid)
  const localComponents = existingComponents.map(c => c.key)

  const missingRemote = localComponents.filter(c => !remoteComponents.includes(c))
  const missingLocal = remoteComponents.filter(c => !localComponents.includes(c))

  console.log('Missing remote:', missingRemote)
  console.log('Missing local:', missingLocal)
}

main()
