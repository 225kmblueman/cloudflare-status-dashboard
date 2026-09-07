import React from 'react'

type Component = {
  id: string
  name: string
  status: string
  updated_at?: string
}

export default function ComponentList({ components }: { components: Component[] }) {
  const color = (s: string) => {
    switch (s) {
      case 'operational':
        return 'text-green-600'
      case 'degraded_performance':
      case 'partial_outage':
        return 'text-yellow-500'
      case 'major_outage':
        return 'text-red-600'
      default:
        return 'text-gray-500'
    }
  }

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
      <h2 className="font-semibold mb-2">Components</h2>
      <ul className="space-y-3 max-h-80 overflow-auto">
        {components.map((c) => (
          <li key={c.id} className="flex items-center justify-between">
            <div>
              <div className="font-medium">{c.name}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Updated: {c.updated_at ? new Date(c.updated_at).toLocaleString() : '—'}</div>
            </div>
            <div className={`font-semibold ${color(c.status)}`}>{c.status.replace(/_/g, ' ')}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}
