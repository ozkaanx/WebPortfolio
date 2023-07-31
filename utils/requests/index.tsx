export default async function getUser() {
    let baseUrl = process.env.NEXT_PUBLIC_API_URL
    const res = await fetch(baseUrl)
    const json = await res.json()
    return json
}

