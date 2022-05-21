// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default function handler(req, res) {
  const getData = async () => {
    const response = await fetch(
      'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=bbfc0425-9acf-4252-8b1c-437f9d3e6ab8',
      {
        method: 'GET',
        headers: {
          Accept: '*/*',
        },
      }
    )

    const data = await response.json()

    res.status(200).json({ data })
  }

  getData()
}
