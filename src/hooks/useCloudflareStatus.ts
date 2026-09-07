import { useEffect, useRef, useState } from 'react'

const SUMMARY_URL = 'https://www.cloudflarestatus.com/api/v2/summary.json'
const INCIDENTS_URL = 'https://www.cloudflarestatus.com/api/v2/incidents.json'

export default function useCloudflareStatus(pollInterval = 60000) {
  const [summary, setSummary] = useState<any | null>(null)
  const [incidents, setIncidents] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const timer = useRef<number | null>(null)

  const fetchAll = async () => {
    try {
      setLoading(true)
      const [sRes, iRes] = await Promise.all([fetch(SUMMARY_URL), fetch(INCIDENTS_URL)])
      const sJson = await sRes.json()
      const iJson = await iRes.json()
      setSummary(sJson)
      setIncidents(iJson.incidents ?? [])
    } catch (e) {
      console.error('Failed to fetch Cloudflare status', e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchAll()
    timer.current = window.setInterval(fetchAll, pollInterval)
    return () => {
      if (timer.current) clearInterval(timer.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { summary, incidents, loading, refresh: fetchAll }
}
