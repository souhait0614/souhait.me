import Script from "next/script"

const ANALYTICS_ID = process.env.NEXT_PUBLIC_ANALYTICS_ID
const Analytics = () => {
  if (process.env.NODE_ENV !== "production") {
    return <></>
  }

  if (!ANALYTICS_ID) {
    console.warn("NEXT_PUBLIC_ANALYTICS_ID not defined")
    return <></>
  }

  return (
    <>
      <Script
        src={`https://static.cloudflareinsights.com/beacon.min.js`}
        defer
        data-cf-beacon={`{"token": "${ANALYTICS_ID}"}`}
        strategy="afterInteractive"
      />
    </>
  )
}

export default Analytics
