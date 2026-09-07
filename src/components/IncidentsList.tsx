import React from 'react'

type Incident = any

export default function IncidentsList({ incidents, showHistory }: { incidents: Incident[]; showHistory: boolean }) {
  const list = showHistory ? incidents : incidents.filter((i: any) => i.status !== 'resolved')

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
      <h2 className="font-semibold mb-2">{showHistory ? 'Recent Incidents' : 'Active Incidents'}</h2>
      {list.length === 0 ? (
        <div className="text-sm text-gray-500">No incidents</div>
      ) : (
        <ul className="space-y-3 max-h-80 overflow-auto">
          {list.map((inc: any) => (
            <li key={inc.id} className="border rounded p-3">
              <div className="flex items-start justify-between">
                <div>
                  <div className="font-semibold">{inc.name}</div>
                  <div className="text-xs text-gray-500">Status: {inc.status} — Impact: {inc.impact}</div>
                </div>
                <div className="text-xs text-gray-400">{inc.created_at ? new Date(inc.created_at).toLocaleString() : ''}</div>
              </div>
              <details className="mt-2">
                <summary className="cursor-pointer text-sm text-blue-600">Details</summary>
                <div className="mt-2 text-sm text-gray-700 dark:text-gray-200">
                  {inc.incident_updates?.map((u: any, idx: number) => (
                    <div key={idx} className="mb-2">
                      <div className="text-xs text-gray-500">{new Date(u.updated_at).toLocaleString()}</div>
                      <div>{u.body}</div>
                    </div>
                  ))}
                </div>
              </details>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
