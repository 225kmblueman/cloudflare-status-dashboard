import React from 'react'

type Props = {
  summary?: any
  loading: boolean
}

export default function StatusBanner({ summary, loading }: Props) {
  const status = summary?.status?.description ?? 'Unknown'
  const color = (() => {
    if (loading) return 'bg-gray-300'
    if (!summary) return 'bg-gray-500'
    switch (summary.status.indicator) {
      case 'none':
        return 'bg-green-600'
      case 'minor':
        return 'bg-yellow-500'
      case 'major':
        return 'bg-red-600'
      default:
        return 'bg-gray-500'
    }
  })()

  return (
    <div className="rounded overflow-hidden shadow">
      <div className={`${color} text-white px-4 py-3 flex items-center justify-between`}>
        <div>
          <strong className="mr-2">Overall Status:</strong>
          <span>{status}</span>
        </div>
        <div className="text-sm opacity-90">Updated: {summary?.page?.updated_at ? new Date(summary.page.updated_at).toLocaleString() : '—'}</div>
      </div>
    </div>
  )
}
