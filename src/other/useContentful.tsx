//import contentful from 'contentful';
const contentful = require('contentful')

export default function useContentful() {

    const client = contentful.createClient({
        // Settings -> API keys
        space: 'nmq73oo09wv6',
        environment: 'master',
        accessToken: 'qJnmw2KT5vqcAA3K8dxKWS8XbTiEeiHGrvk6j81t0VY' // Content Delivery API Key
    })

    const getEntries = () => {
        client.getEntries()
        .then((response: { items: any }) => console.log(response.items))
        .catch(console.error)
    }

    return {
        getEntries
    }
}
