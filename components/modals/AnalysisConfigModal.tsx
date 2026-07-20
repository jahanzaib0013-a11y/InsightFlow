'use client'

import { useState } from 'react'

interface AnalysisConfigModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AnalysisConfigModal({ isOpen, onClose }: AnalysisConfigModalProps) {
  const [config, setConfig] = useState({
    analysisType: 'comprehensive',
    documentTypes: ['pdf', 'docx', 'csv'],
    extractEntities: true,
    sentimentAnalysis: true,
    topicModeling: true,
    language: 'english',
    outputFormat: 'structured',
    // Advanced parameters
    confidenceThreshold: 0.7,
    maxResults: 50,
    includeMetadata: true,
    enableCrossReference: true,
    customKeywords: [] as string[],
    dateRange: {
      enabled: false,
      startDate: '',
      endDate: ''
    }
  })

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4">
      <div className="bg-surface-container border border-outline-variant/20 rounded-2xl shadow-2xl w-full max-w-3xl mx-4 max-h-[85vh] overflow-hidden flex flex-col animate-in fade-in-0 zoom-in-95 duration-200">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-primary/10 via-transparent to-tertiary/10 p-6 border-b border-outline-variant/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-tertiary to-primary flex items-center justify-center shadow-lg">
                <span className="material-symbols-outlined text-white text-xl">psychology</span>
              </div>
              <div>
                <h2 className="font-h2 text-h2 text-on-surface font-bold">Configure Analysis Parameters</h2>
                <p className="text-sm text-on-surface-variant mt-1">Define what insights you're looking for</p>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-surface-container-high/50 hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-all duration-200 flex items-center justify-center group"
            >
              <span className="material-symbols-outlined text-lg group-hover:rotate-90 transition-transform duration-200">close</span>
            </button>
          </div>
        </div>

        {/* Configuration Options */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          {/* Analysis Type */}
          <div className="space-y-3">
            <label className="flex items-center gap-2 font-body-sm font-bold text-on-surface">
              <span className="material-symbols-outlined text-primary text-lg">analytics</span>
              Analysis Type
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {[
                { value: 'comprehensive', label: 'Comprehensive', desc: 'Deep analysis with all features', icon: 'data_exploration' },
                { value: 'quick', label: 'Quick', desc: 'Fast insights in seconds', icon: 'bolt' },
                { value: 'custom', label: 'Custom', desc: 'Tailored to your needs', icon: 'tune' }
              ].map((type) => (
                <label key={type.value} className="relative cursor-pointer">
                  <input
                    type="radio"
                    name="analysisType"
                    value={type.value}
                    checked={config.analysisType === type.value}
                    onChange={(e) => setConfig(prev => ({ ...prev, analysisType: e.target.value }))}
                    className="sr-only"
                  />
                  <div className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                    config.analysisType === type.value
                      ? 'border-primary bg-primary/5 shadow-lg scale-105'
                      : 'border-outline-variant/30 bg-surface-container-low hover:border-primary/50 hover:shadow-md'
                  }`}>
                    <div className="flex flex-col items-center text-center space-y-2">
                      <span className={`material-symbols-outlined text-2xl ${
                        config.analysisType === type.value ? 'text-primary' : 'text-on-surface-variant'
                      }`}>{type.icon}</span>
                      <span className={`font-semibold text-sm ${
                        config.analysisType === type.value ? 'text-primary' : 'text-on-surface'
                      }`}>{type.label}</span>
                      <span className="text-xs text-on-surface-variant">{type.desc}</span>
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Document Types */}
          <div className="space-y-3">
            <label className="flex items-center gap-2 font-body-sm font-bold text-on-surface">
              <span className="material-symbols-outlined text-primary text-lg">description</span>
              Document Types to Process
            </label>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {[
                { type: 'pdf', icon: 'picture_as_pdf', color: 'text-red-500' },
                { type: 'docx', icon: 'text_snippet', color: 'text-blue-500' },
                { type: 'csv', icon: 'table_chart', color: 'text-green-500' },
                { type: 'txt', icon: 'text_fields', color: 'text-purple-500' },
                { type: 'json', icon: 'code', color: 'text-yellow-500' }
              ].map((doc) => (
                <label key={doc.type} className="relative cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={config.documentTypes.includes(doc.type)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setConfig(prev => ({ ...prev, documentTypes: [...prev.documentTypes, doc.type] }))
                      } else {
                        setConfig(prev => ({ ...prev, documentTypes: prev.documentTypes.filter(t => t !== doc.type) }))
                      }
                    }}
                    className="sr-only"
                  />
                  <div className={`p-3 rounded-xl border-2 transition-all duration-200 ${
                    config.documentTypes.includes(doc.type)
                      ? 'border-primary bg-primary/5 shadow-lg scale-105'
                      : 'border-outline-variant/30 bg-surface-container-low hover:border-primary/50 hover:shadow-md'
                  }`}>
                    <div className="flex flex-col items-center space-y-2">
                      <span className={`material-symbols-outlined text-xl ${
                        config.documentTypes.includes(doc.type) ? 'text-primary' : doc.color
                      }`}>{doc.icon}</span>
                      <span className={`text-xs font-semibold uppercase ${
                        config.documentTypes.includes(doc.type) ? 'text-primary' : 'text-on-surface'
                      }`}>{doc.type}</span>
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Analysis Features */}
          <div className="space-y-3">
            <label className="flex items-center gap-2 font-body-sm font-bold text-on-surface">
              <span className="material-symbols-outlined text-primary text-lg">auto_awesome</span>
              Analysis Features
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { 
                  key: 'extractEntities', 
                  label: 'Entity Extraction', 
                  desc: 'People, Organizations, Locations',
                  icon: 'people',
                  color: 'text-blue-500'
                },
                { 
                  key: 'sentimentAnalysis', 
                  label: 'Sentiment Analysis', 
                  desc: 'Emotional tone detection',
                  icon: 'sentiment_satisfied',
                  color: 'text-green-500'
                },
                { 
                  key: 'topicModeling', 
                  label: 'Topic Modeling', 
                  desc: 'Key themes identification',
                  icon: 'category',
                  color: 'text-purple-500'
                }
              ].map((feature) => (
                <label key={feature.key} className="relative cursor-pointer">
                  <input
                    type="checkbox"
                    checked={config[feature.key as keyof typeof config] as boolean}
                    onChange={(e) => setConfig(prev => ({ ...prev, [feature.key]: e.target.checked }))}
                    className="sr-only"
                  />
                  <div className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                    config[feature.key as keyof typeof config] as boolean
                      ? 'border-primary bg-primary/5 shadow-lg scale-105'
                      : 'border-outline-variant/30 bg-surface-container-low hover:border-primary/50 hover:shadow-md'
                  }`}>
                    <div className="flex items-start gap-3">
                      <span className={`material-symbols-outlined text-lg ${
                        config[feature.key as keyof typeof config] as boolean ? 'text-primary' : feature.color
                      }`}>{feature.icon}</span>
                      <div>
                        <span className={`font-semibold text-sm block ${
                          config[feature.key as keyof typeof config] as boolean ? 'text-primary' : 'text-on-surface'
                        }`}>{feature.label}</span>
                        <span className="text-xs text-on-surface-variant">{feature.desc}</span>
                      </div>
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Language & Output Format */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Language */}
            <div className="space-y-3">
              <label className="flex items-center gap-2 font-body-sm font-bold text-on-surface">
                <span className="material-symbols-outlined text-primary text-lg">language</span>
                Primary Language
              </label>
              <select
                value={config.language}
                onChange={(e) => setConfig(prev => ({ ...prev, language: e.target.value }))}
                className="w-full p-3 bg-surface-container border border-outline-variant rounded-xl text-on-surface focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-200"
              >
                <option value="english">English</option>
                <option value="spanish">Español</option>
                <option value="french">Français</option>
                <option value="german">Deutsch</option>
                <option value="chinese">中文</option>
              </select>
            </div>

            {/* Output Format */}
            <div className="space-y-3">
              <label className="flex items-center gap-2 font-body-sm font-bold text-on-surface">
                <span className="material-symbols-outlined text-primary text-lg">output</span>
                Output Format
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { value: 'structured', label: 'Structured', icon: 'code_blocks' },
                  { value: 'summary', label: 'Summary', icon: 'summarize' },
                  { value: 'detailed', label: 'Detailed', icon: 'description' },
                  { value: 'insights', label: 'Insights', icon: 'lightbulb' }
                ].map((format) => (
                  <label key={format.value} className="relative cursor-pointer">
                    <input
                      type="radio"
                      name="outputFormat"
                      value={format.value}
                      checked={config.outputFormat === format.value}
                      onChange={(e) => setConfig(prev => ({ ...prev, outputFormat: e.target.value }))}
                      className="sr-only"
                    />
                    <div className={`p-3 rounded-xl border-2 transition-all duration-200 ${
                      config.outputFormat === format.value
                        ? 'border-primary bg-primary/5 shadow-lg scale-105'
                        : 'border-outline-variant/30 bg-surface-container-low hover:border-primary/50 hover:shadow-md'
                    }`}>
                      <div className="flex flex-col items-center space-y-1">
                        <span className={`material-symbols-outlined text-lg ${
                          config.outputFormat === format.value ? 'text-primary' : 'text-on-surface-variant'
                        }`}>{format.icon}</span>
                        <span className={`text-xs font-semibold ${
                          config.outputFormat === format.value ? 'text-primary' : 'text-on-surface'
                        }`}>{format.label}</span>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Advanced Settings */}
          <div className="border-t border-outline-variant/20 pt-6">
            <div className="flex items-center gap-2 mb-6">
              <span className="material-symbols-outlined text-primary text-lg">tune</span>
              <h4 className="font-body-sm font-bold text-on-surface">Advanced Settings</h4>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Confidence Threshold */}
              <div className="space-y-3">
                <label className="flex items-center justify-between font-body-sm font-bold text-on-surface">
                  <span>Confidence Threshold</span>
                  <span className="text-primary font-mono-label bg-primary/10 px-2 py-1 rounded">
                    {(config.confidenceThreshold * 100).toFixed(0)}%
                  </span>
                </label>
                <div className="relative">
                  <input
                    type="range"
                    min="0.1"
                    max="1.0"
                    step="0.1"
                    value={config.confidenceThreshold}
                    onChange={(e) => setConfig(prev => ({ ...prev, confidenceThreshold: parseFloat(e.target.value) }))}
                    className="w-full h-2 bg-surface-container-highest rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-xs text-on-surface-variant mt-1">
                    <span>10%</span>
                    <span>100%</span>
                  </div>
                </div>
              </div>

              {/* Max Results */}
              <div className="space-y-3">
                <label className="flex items-center justify-between font-body-sm font-bold text-on-surface">
                  <span>Max Results</span>
                  <span className="text-primary font-mono-label bg-primary/10 px-2 py-1 rounded">
                    {config.maxResults}
                  </span>
                </label>
                <input
                  type="number"
                  min="10"
                  max="100"
                  value={config.maxResults}
                  onChange={(e) => setConfig(prev => ({ ...prev, maxResults: parseInt(e.target.value) }))}
                  className="w-full p-3 bg-surface-container border border-outline-variant rounded-xl text-on-surface focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                />
              </div>

              {/* Toggle Options */}
              <div className="space-y-4">
                <label className="flex items-center justify-between p-3 bg-surface-container-low rounded-xl cursor-pointer hover:bg-surface-container-low/80 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-tertiary">metadata</span>
                    <div>
                      <span className="text-sm font-medium text-on-surface">Include Metadata</span>
                      <span className="text-xs text-on-surface-variant block">Add document metadata to analysis</span>
                    </div>
                  </div>
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={config.includeMetadata}
                      onChange={(e) => setConfig(prev => ({ ...prev, includeMetadata: e.target.checked }))}
                      className="sr-only"
                    />
                    <div className={`w-12 h-6 rounded-full transition-colors duration-200 ${
                      config.includeMetadata ? 'bg-primary' : 'bg-surface-container-highest'
                    }`}>
                      <div className={`w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-200 ${
                        config.includeMetadata ? 'translate-x-6' : 'translate-x-0.5'
                      }`} />
                    </div>
                  </div>
                </label>

                <label className="flex items-center justify-between p-3 bg-surface-container-low rounded-xl cursor-pointer hover:bg-surface-container-low/80 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-tertiary">compare_arrows</span>
                    <div>
                      <span className="text-sm font-medium text-on-surface">Cross-Reference</span>
                      <span className="text-xs text-on-surface-variant block">Enable cross-document analysis</span>
                    </div>
                  </div>
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={config.enableCrossReference}
                      onChange={(e) => setConfig(prev => ({ ...prev, enableCrossReference: e.target.checked }))}
                      className="sr-only"
                    />
                    <div className={`w-12 h-6 rounded-full transition-colors duration-200 ${
                      config.enableCrossReference ? 'bg-primary' : 'bg-surface-container-highest'
                    }`}>
                      <div className={`w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-200 ${
                        config.enableCrossReference ? 'translate-x-6' : 'translate-x-0.5'
                      }`} />
                    </div>
                  </div>
                </label>
              </div>

              {/* Custom Keywords */}
              <div className="space-y-3">
                <label className="flex items-center gap-2 font-body-sm font-bold text-on-surface">
                  <span className="material-symbols-outlined text-tertiary">tag</span>
                  Custom Keywords
                </label>
                <input
                  type="text"
                  placeholder="Enter keywords separated by commas"
                  value={config.customKeywords.join(', ')}
                  onChange={(e) => setConfig(prev => ({ ...prev, customKeywords: e.target.value.split(',').map(k => k.trim()).filter(k => k.length > 0) }))}
                  className="w-full p-3 bg-surface-container border border-outline-variant rounded-xl text-on-surface placeholder:text-on-surface-variant/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                />
                <div className="flex flex-wrap gap-2">
                  {config.customKeywords.map((keyword, index) => (
                    <span key={index} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full font-mono-label">
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-4 p-6 border-t border-outline-variant/20 bg-surface-container-low/50">
          <button
            onClick={onClose}
            className="flex-1 px-6 py-3 bg-surface-container border border-outline-variant text-on-surface rounded-xl font-semibold hover:bg-surface-container-high hover:border-primary/50 transition-all duration-200 active:scale-95"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              // Save configuration logic here
              console.log('Saving analysis config:', config)
              onClose()
            }}
            className="flex-1 px-6 py-3 bg-gradient-to-r from-primary to-primary/80 text-on-primary rounded-xl font-semibold hover:from-primary/90 hover:to-primary/70 transition-all duration-200 active:scale-95 shadow-lg hover:shadow-xl"
          >
            <span className="flex items-center justify-center gap-2">
              <span className="material-symbols-outlined">save</span>
              Save Configuration
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}
