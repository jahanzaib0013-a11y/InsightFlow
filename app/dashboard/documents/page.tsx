'use client'

export default function DocumentsPage() {
  return (
    <main className="flex-1 px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 max-w-7xl mx-auto">
      <div className="max-w-6xl">
        <h1 className="font-h1 text-h1 text-on-surface mb-2">My Documents</h1>
        <p className="font-body-main text-body-main text-on-surface-variant mb-8">
          View and manage all your uploaded documents.
        </p>

        {/* Document List */}
        <div className="space-y-4">
          {[
            { name: 'Q3 Financial Report', type: 'PDF', size: '2.4 MB', uploaded: '2 days ago', status: 'Indexed' },
            { name: 'Marketing Strategy 2024', type: 'DOCX', size: '1.2 MB', uploaded: '1 week ago', status: 'Indexed' },
            { name: 'Product Roadmap', type: 'PDF', size: '3.1 MB', uploaded: '2 weeks ago', status: 'Indexed' },
            { name: 'Annual Report 2023', type: 'PDF', size: '5.6 MB', uploaded: '1 month ago', status: 'Indexed' },
            { name: 'Board Minutes', type: 'TXT', size: '0.8 MB', uploaded: '2 months ago', status: 'Indexed' },
          ].map((doc, idx) => (
            <div key={idx} className="flex items-center justify-between p-6 rounded-lg border border-outline-variant/10 bg-surface-container-low/30 hover:bg-surface-container-low/60 transition">
              <div className="flex items-center gap-6 flex-1">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <span className="material-symbols-outlined text-2xl">description</span>
                </div>
                <div className="flex-1">
                  <p className="font-body-main font-bold text-on-surface mb-1">{doc.name}</p>
                  <p className="font-body-sm text-on-surface-variant">{doc.type} • {doc.size}</p>
                </div>
              </div>
              <div className="text-right mr-6">
                <p className="font-body-sm text-on-surface-variant mb-1">{doc.uploaded}</p>
                <span className="inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium bg-tertiary/10 text-tertiary">
                  <span className="material-symbols-outlined text-sm">check_circle</span>
                  {doc.status}
                </span>
              </div>
              <button className="material-symbols-outlined text-on-surface-variant hover:text-on-surface transition">
                more_vert
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
