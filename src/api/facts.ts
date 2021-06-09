export async function getFact() {
  try {
    const res = await fetch('https://uselessfacts.jsph.pl/random.json', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    return await res.json()
  } catch (err) {
    console.info(err)
  }
}
