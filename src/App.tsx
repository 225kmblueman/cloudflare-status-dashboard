import React, { useState } from 'react'
import StatusBanner from './components/StatusBanner'
import ComponentList from './components/ComponentList'
import IncidentsList from './components/IncidentsList'
import useCloudflareStatus from './hooks/useCloudflareStatus'

export default function App() {
  const { summary, incidents, loading, refresh } = useCloudflareStatus()
  const [showHistory, setShowHistory] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="max-w-4xl mx-auto p-4">
        <header className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-semibold">Cloudflare Status Dashboard</h1>
            <p className="text-sm text-gray-600 dark:text-gray-300">Shows public Cloudflare status and incidents</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => refresh()}
              className="px-3 py-1 rounded bg-blue-600 text-white text-sm"
            >
              Refresh
            </button>
            <button
              onClick={() => setShowHistory((s) => !s)}
              className="px-3 py-1 rounded border text-sm"
            >
              {showHistory ? 'Live' : 'History'}
            </button>
          </div>
        </header>

        <StatusBanner summary={summary} loading={loading} />

        <section className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <ComponentList components={summary?.components ?? []} />
          <IncidentsList incidents={incidents} showHistory={showHistory} />
        </section>

        <footer className="mt-8 text-xs text-gray-500">
          Data from Cloudflare status page — <a className="underline" href="https://www.cloudflarestatus.com/">cloudflarestatus.com</a>
        </footer>
      </div>
    </div>
  )
}
