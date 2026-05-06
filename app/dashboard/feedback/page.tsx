'use client'

import { useState } from 'react'

export default function FeedbackPage() {
  const [feedbackType, setFeedbackType] = useState('')
  const [rating, setRating] = useState(0)
  const [message, setMessage] = useState('')

  return (
    <main className="flex-1 overflow-y-auto">
      {/* Main Content Area */}
      <div className="max-w-5xl mx-auto px-margin_safe py-xl">
        {/* Hero / Header Section */}
        <div className="mb-xl">
          <h1 className="font-h1 text-h1 text-on-surface mb-md">Send Feedback</h1>
          <p className="font-body-main text-body-main text-on-surface-variant max-w-2xl">
            Help us improve InsightFlow by sharing your thoughts, reporting issues, or suggesting new features.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-xl">
          {/* Feedback Form */}
          <div className="lg:col-span-2">
            <div className="bg-surface-container-low border border-outline-variant rounded-xl p-lg">
              <h2 className="font-h2 text-h2 text-on-surface mb-lg">Tell us what you think</h2>

              {/* Feedback Type */}
              <div className="mb-lg">
                <label className="block font-body-main font-bold text-on-surface mb-md">Feedback Type</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-sm">
                  {[
                    { id: 'bug', label: 'Bug Report', icon: 'bug_report' },
                    { id: 'feature', label: 'Feature Request', icon: 'lightbulb' },
                    { id: 'improvement', label: 'Improvement', icon: 'trending_up' },
                    { id: 'general', label: 'General', icon: 'chat' }
                  ].map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setFeedbackType(type.id)}
                      className={`p-md rounded-lg border transition-all flex flex-col items-center gap-sm ${
                        feedbackType === type.id
                          ? 'border-primary bg-primary/10 text-primary'
                          : 'border-outline-variant text-on-surface-variant hover:border-primary/50'
                      }`}
                    >
                      <span className="material-symbols-outlined text-xl">{type.icon}</span>
                      <span className="font-body-sm font-medium">{type.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Rating */}
              <div className="mb-lg">
                <label className="block font-body-main font-bold text-on-surface mb-md">Overall Rating</label>
                <div className="flex gap-sm">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => setRating(star)}
                      className="text-3xl transition-all hover:scale-110"
                    >
                      <span
                        className={`material-symbols-outlined ${
                          star <= rating ? 'text-primary' : 'text-outline-variant'
                        }`}
                      >
                        {star <= rating ? 'star' : 'star_outline'}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div className="mb-lg">
                <label className="block font-body-main font-bold text-on-surface mb-md">Your Feedback</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us more about your experience..."
                  className="w-full h-32 p-md bg-surface-container border border-outline-variant rounded-lg text-on-surface placeholder:text-on-surface-variant/50 focus:border-primary focus:outline-none resize-none"
                />
              </div>

              {/* Contact Info (Optional) */}
              <div className="mb-lg">
                <label className="block font-body-main font-bold text-on-surface mb-md">Email (Optional)</label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full p-md bg-surface-container border border-outline-variant rounded-lg text-on-surface placeholder:text-on-surface-variant/50 focus:border-primary focus:outline-none"
                />
              </div>

              {/* Submit Button */}
              <button className="w-full bg-primary text-on-primary px-6 py-3 rounded-lg font-semibold hover:brightness-110 transition-all active:scale-95">
                Send Feedback
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-lg">
            {/* Quick Stats */}
            <div className="bg-surface-container-low border border-outline-variant rounded-xl p-lg">
              <h3 className="font-h3 text-h3 text-on-surface mb-md">Community Impact</h3>
              <div className="space-y-md">
                <div className="flex justify-between items-center">
                  <span className="font-body-sm text-on-surface-variant">Feedback This Week</span>
                  <span className="font-mono-label text-primary">127</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-body-sm text-on-surface-variant">Features Implemented</span>
                  <span className="font-mono-label text-primary">23</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-body-sm text-on-surface-variant">Bugs Fixed</span>
                  <span className="font-mono-label text-primary">89</span>
                </div>
              </div>
            </div>

            {/* Recent Updates */}
            <div className="bg-surface-container-low border border-outline-variant rounded-xl p-lg">
              <h3 className="font-h3 text-h3 text-on-surface mb-md">Recent Updates</h3>
              <div className="space-y-md">
                <div className="flex gap-sm">
                  <div className="w-2 h-2 bg-tertiary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-body-sm text-on-surface">Added bulk upload feature</p>
                    <p className="font-body-sm text-on-surface-variant text-xs">Based on 45 user requests</p>
                  </div>
                </div>
                <div className="flex gap-sm">
                  <div className="w-2 h-2 bg-tertiary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-body-sm text-on-surface">Improved search accuracy</p>
                    <p className="font-body-sm text-on-surface-variant text-xs">Performance update v2.1</p>
                  </div>
                </div>
                <div className="flex gap-sm">
                  <div className="w-2 h-2 bg-tertiary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-body-sm text-on-surface">Fixed PDF parsing issues</p>
                    <p className="font-body-sm text-on-surface-variant text-xs">Bug fix v2.0.3</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-secondary-container/20 border border-secondary/30 rounded-xl p-lg">
              <h3 className="font-h3 text-h3 text-on-surface mb-md">Other Ways to Reach Us</h3>
              <div className="space-y-sm">
                <a href="#" className="flex items-center gap-sm text-primary hover:underline">
                  <span className="material-symbols-outlined text-sm">email</span>
                  <span className="font-body-sm">support@insightflow.com</span>
                </a>
                <a href="#" className="flex items-center gap-sm text-primary hover:underline">
                  <span className="material-symbols-outlined text-sm">forum</span>
                  <span className="font-body-sm">Community Forum</span>
                </a>
                <a href="#" className="flex items-center gap-sm text-primary hover:underline">
                  <span className="material-symbols-outlined text-sm">groups</span>
                  <span className="font-body-sm">Discord Server</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
