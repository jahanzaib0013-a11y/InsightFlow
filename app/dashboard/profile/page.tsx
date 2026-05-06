'use client'

import { useState } from 'react'

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('profile')
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    updates: true,
    marketing: false
  })
  const [preferences, setPreferences] = useState({
    theme: 'dark',
    language: 'en',
    autoSave: true,
    analytics: true
  })

  return (
    <main className="flex-1 overflow-y-auto">
      {/* Main Content Area */}
      <div className="max-w-5xl mx-auto px-margin_safe py-xl">
        {/* Hero / Header Section */}
        <div className="mb-xl">
          <h1 className="font-h1 text-h1 text-on-surface mb-md">Profile Settings</h1>
          <p className="font-body-main text-body-main text-on-surface-variant max-w-2xl">
            Manage your account settings, preferences, and personal information.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-xl">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-surface-container-low border border-outline-variant rounded-xl p-lg">
              <nav className="space-y-sm">
                {[
                  { id: 'profile', label: 'Profile', icon: 'person' },
                  { id: 'security', label: 'Security', icon: 'shield' },
                  { id: 'notifications', label: 'Notifications', icon: 'notifications' },
                  { id: 'preferences', label: 'Preferences', icon: 'settings' },
                  { id: 'billing', label: 'Billing', icon: 'credit_card' },
                  { id: 'api', label: 'API Keys', icon: 'key' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-sm px-md py-sm rounded-lg transition-all ${
                      activeTab === tab.id
                        ? 'bg-primary text-on-primary shadow-sm'
                        : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
                    }`}
                  >
                    <span className="material-symbols-outlined text-lg">{tab.icon}</span>
                    <span className="font-body-sm font-medium">{tab.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-3">
            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <div className="space-y-md">
                <div className="bg-surface-container-low border border-outline-variant rounded-xl p-lg">
                  <h2 className="font-h2 text-h2 text-on-surface mb-lg">Personal Information</h2>
                  
                  <div className="flex items-center gap-lg mb-lg">
                    <div className="w-20 h-20 rounded-full bg-surface-variant overflow-hidden border border-outline-variant">
                      <img 
                        alt="User profile" 
                        className="w-full h-full object-cover" 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAy9h7V1NbSOtXgcRtV0jhpTL2FzAOyL3xuk5dhnY58ZjAS-WeNywtoLbQmSwjHS7ihze6ddapFxHZOly9B2sUmXgqXsMdoEMbSDgTYZuJzGCQwzRP6aoU7uuNfwYGf9az0WW2aT0hXzHoHZ9rGLfudi6YXvBAUksyaLBVlAG67cmFdEykD-PB03oV-y7-CHYaMKTQ7pnEs7WJIHkmMJfMHd_C7rnrzSEiFj9OZlWS4Lg6Ns1SpBG6VM-Y--m3BajCIZouDYnvH_sI"
                      />
                    </div>
                    <div>
                      <button className="bg-primary text-on-primary px-4 py-2 rounded-lg font-semibold text-sm hover:bg-primary/90 active:scale-95 transition-all duration-200 shadow-sm">
                        Change Avatar
                      </button>
                      <p className="font-body-sm text-on-surface-variant mt-sm">JPG, PNG or GIF. Max 2MB.</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                    <div>
                      <label className="block font-body-sm font-bold text-on-surface mb-sm">First Name</label>
                      <input
                        type="text"
                        defaultValue="John"
                        className="w-full p-3 bg-surface-container border border-outline-variant rounded-lg text-on-surface placeholder:text-on-surface-variant/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <div>
                      <label className="block font-body-sm font-bold text-on-surface mb-sm">Last Name</label>
                      <input
                        type="text"
                        defaultValue="Doe"
                        className="w-full p-3 bg-surface-container border border-outline-variant rounded-lg text-on-surface placeholder:text-on-surface-variant/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <div>
                      <label className="block font-body-sm font-bold text-on-surface mb-sm">Email</label>
                      <input
                        type="email"
                        defaultValue="john.doe@example.com"
                        className="w-full p-3 bg-surface-container border border-outline-variant rounded-lg text-on-surface placeholder:text-on-surface-variant/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <div>
                      <label className="block font-body-sm font-bold text-on-surface mb-sm">Phone</label>
                      <input
                        type="tel"
                        defaultValue="+1 (555) 123-4567"
                        className="w-full p-3 bg-surface-container border border-outline-variant rounded-lg text-on-surface placeholder:text-on-surface-variant/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-surface-container-low border border-outline-variant rounded-xl p-lg">
                  <h3 className="font-h3 text-h3 text-on-surface mb-lg">Bio</h3>
                  <textarea
                    defaultValue="I'm a data analyst who loves working with AI tools to extract insights from complex documents."
                    className="w-full h-24 p-3 bg-surface-container border border-outline-variant rounded-lg text-on-surface placeholder:text-on-surface-variant/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                  />
                </div>
              </div>
            )}

            {/* Security Tab */}
            {activeTab === 'security' && (
              <div className="space-y-md">
                <div className="bg-surface-container-low border border-outline-variant rounded-xl p-lg">
                  <h2 className="font-h2 text-h2 text-on-surface mb-lg">Password</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block font-body-sm font-bold text-on-surface mb-sm">Current Password</label>
                      <input
                        type="password"
                        className="w-full p-3 bg-surface-container border border-outline-variant rounded-lg text-on-surface placeholder:text-on-surface-variant/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <div>
                      <label className="block font-body-sm font-bold text-on-surface mb-sm">New Password</label>
                      <input
                        type="password"
                        className="w-full p-3 bg-surface-container border border-outline-variant rounded-lg text-on-surface placeholder:text-on-surface-variant/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <div>
                      <label className="block font-body-sm font-bold text-on-surface mb-sm">Confirm New Password</label>
                      <input
                        type="password"
                        className="w-full p-3 bg-surface-container border border-outline-variant rounded-lg text-on-surface placeholder:text-on-surface-variant/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-surface-container-low border border-outline-variant rounded-xl p-lg">
                  <h3 className="font-h3 text-h3 text-on-surface mb-lg">Two-Factor Authentication</h3>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-body-main text-on-surface">Add an extra layer of security to your account</p>
                      <p className="font-body-sm text-on-surface-variant mt-sm">Use authenticator app or SMS codes</p>
                    </div>
                    <button className="bg-primary text-on-primary px-4 py-2 rounded-lg font-semibold text-sm hover:bg-primary/90 active:scale-95 transition-all duration-200 shadow-sm">
                      Enable 2FA
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Notifications Tab */}
            {activeTab === 'notifications' && (
              <div className="bg-surface-container-low border border-outline-variant rounded-xl p-lg">
                <h2 className="font-h2 text-h2 text-on-surface mb-lg">Notification Preferences</h2>
                <div className="space-y-md">
                  {(Object.entries({
                    email: { label: 'Email Notifications', desc: 'Receive updates via email' },
                    push: { label: 'Push Notifications', desc: 'Get browser push notifications' },
                    updates: { label: 'Product Updates', desc: 'News about features and improvements' },
                    marketing: { label: 'Marketing Emails', desc: 'Promotional content and offers' }
                  }) as [keyof typeof notifications, { label: string; desc: string }][]).map(([key, config]) => (
                    <div key={key} className="flex items-center justify-between py-2">
                      <div className="flex-1 pr-4">
                        <p className="font-body-main text-on-surface mb-1">{config.label}</p>
                        <p className="font-body-sm text-on-surface-variant">{config.desc}</p>
                      </div>
                      <div className="relative">
                        <button
                          onClick={() => setNotifications(prev => ({ ...prev, [key]: !prev[key] }))}
                          className={`relative w-12 h-7 rounded-full transition-colors duration-200 focus:outline-none ${
                            notifications[key] ? 'bg-primary' : 'bg-surface-container-highest'
                          }`}
                        >
                          <span
                            className={`absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform duration-200 shadow ${
                              notifications[key] ? 'translate-x-6' : 'translate-x-0'
                            }`}
                          />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Preferences Tab */}
            {activeTab === 'preferences' && (
              <div className="bg-surface-container-low border border-outline-variant rounded-xl p-lg">
                <h2 className="font-h2 text-h2 text-on-surface mb-lg">Application Preferences</h2>
                <div className="space-y-md">
                  <div>
                    <label className="block font-body-sm font-bold text-on-surface mb-sm">Theme</label>
                    <select
                      value={preferences.theme}
                      onChange={(e) => setPreferences(prev => ({ ...prev, theme: e.target.value }))}
                      className="w-full p-3 bg-surface-container border border-outline-variant rounded-lg text-on-surface focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    >
                      <option value="dark">Dark</option>
                      <option value="light">Light</option>
                      <option value="system">System</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-body-sm font-bold text-on-surface mb-sm">Language</label>
                    <select
                      value={preferences.language}
                      onChange={(e) => setPreferences(prev => ({ ...prev, language: e.target.value }))}
                      className="w-full p-3 bg-surface-container border border-outline-variant rounded-lg text-on-surface focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    >
                      <option value="en">English</option>
                      <option value="es">Español</option>
                      <option value="fr">Français</option>
                      <option value="de">Deutsch</option>
                    </select>
                  </div>
                  <div className="space-y-4">
                    {(Object.entries({
                      autoSave: { label: 'Auto-save documents', desc: 'Automatically save your work' },
                      analytics: { label: 'Analytics', desc: 'Help us improve with usage data' }
                    }) as [keyof typeof preferences, { label: string; desc: string }][]).map(([key, config]) => (
                      <div key={key} className="flex items-center justify-between py-2">
                        <div className="flex-1 pr-4">
                          <p className="font-body-main text-on-surface mb-1">{config.label}</p>
                          <p className="font-body-sm text-on-surface-variant">{config.desc}</p>
                        </div>
                        <div className="relative">
                          <button
                            onClick={() => setPreferences(prev => ({ ...prev, [key]: !prev[key] }))}
                            className={`relative w-12 h-7 rounded-full transition-colors duration-200 focus:outline-none ${
                              preferences[key] ? 'bg-primary' : 'bg-surface-container-highest'
                            }`}
                          >
                            <span
                              className={`absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform duration-200 shadow ${
                                preferences[key] ? 'translate-x-6' : 'translate-x-0'
                              }`}
                            />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Billing Tab */}
            {activeTab === 'billing' && (
              <div className="space-y-md">
                <div className="bg-surface-container-low border border-outline-variant rounded-xl p-lg">
                  <h2 className="font-h2 text-h2 text-on-surface mb-lg">Current Plan</h2>
                  <div className="bg-primary/10 border border-primary/30 rounded-xl p-lg mb-lg">
                    <div className="flex justify-between items-start mb-md">
                      <div>
                        <h3 className="font-h3 text-h3 text-primary mb-sm">Pro Plan</h3>
                        <p className="font-body-main text-on-surface">$29/month</p>
                      </div>
                      <span className="px-3 py-1 bg-primary text-on-primary rounded-lg font-mono-label text-sm">ACTIVE</span>
                    </div>
                    <div className="space-y-sm">
                      <div className="flex justify-between text-sm">
                        <span className="text-on-surface-variant">Documents processed</span>
                        <span className="font-mono-label text-primary">847 / 1000</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-on-surface-variant">Storage used</span>
                        <span className="font-mono-label text-primary">2.3 GB / 10 GB</span>
                      </div>
                    </div>
                  </div>
                  <button className="w-full bg-surface-container border border-outline-variant text-on-surface px-4 py-2 rounded-lg font-semibold hover:bg-surface-container-high active:scale-95 transition-all duration-200">
                    Upgrade Plan
                  </button>
                </div>

                <div className="bg-surface-container-low border border-outline-variant rounded-xl p-lg">
                  <h3 className="font-h3 text-h3 text-on-surface mb-lg">Payment Method</h3>
                  <div className="flex items-center justify-between p-md bg-surface-container rounded-lg border border-outline-variant">
                    <div className="flex items-center gap-sm">
                      <span className="material-symbols-outlined text-primary">credit_card</span>
                      <div>
                        <p className="font-body-main text-on-surface">•••• •••• •••• 4242</p>
                        <p className="font-body-sm text-on-surface-variant">Expires 12/24</p>
                      </div>
                    </div>
                    <button className="text-primary font-mono-label text-sm hover:underline">Update</button>
                  </div>
                </div>
              </div>
            )}

            {/* API Keys Tab */}
            {activeTab === 'api' && (
              <div className="space-y-md">
                <div className="bg-surface-container-low border border-outline-variant rounded-xl p-lg">
                  <div className="flex justify-between items-center mb-lg">
                    <h2 className="font-h2 text-h2 text-on-surface">API Keys</h2>
                    <button className="bg-primary text-on-primary px-4 py-2 rounded-lg font-semibold text-sm hover:bg-primary/90 active:scale-95 transition-all duration-200 shadow-sm">
                      Generate New Key
                    </button>
                  </div>
                  <div className="space-y-4">
                    <div className="p-md bg-surface-container rounded-lg border border-outline-variant">
                      <div className="flex justify-between items-start mb-sm">
                        <div>
                          <p className="font-body-main text-on-surface font-mono-label">sk-aiarch-...</p>
                          <p className="font-body-sm text-on-surface-variant">Created on Jan 15, 2024</p>
                        </div>
                        <div className="flex gap-sm">
                          <button className="text-primary font-mono-label text-sm hover:underline">Reveal</button>
                          <button className="text-error font-mono-label text-sm hover:underline">Delete</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-secondary-container/20 border border-secondary/30 rounded-xl p-lg">
                  <h3 className="font-h3 text-h3 text-on-surface mb-md">API Usage</h3>
                  <div className="space-y-sm">
                    <div className="flex justify-between text-sm">
                      <span className="text-on-surface-variant">Requests this month</span>
                      <span className="font-mono-label text-secondary">12,847 / 50,000</span>
                    </div>
                    <div className="w-full h-2 bg-surface-container-highest rounded-full overflow-hidden">
                      <div className="h-full bg-secondary w-[25%] rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Save Button */}
            <div className="mt-8 flex justify-end gap-lg">
              <button className="bg-surface-container border border-outline-variant text-on-surface px-6 py-2 rounded-lg font-semibold hover:bg-surface-container-high active:scale-95 transition-all duration-200">
                Cancel
              </button>
              <button className="bg-primary text-on-primary px-6 py-2 rounded-lg font-semibold hover:bg-primary/90 active:scale-95 transition-all duration-200 shadow-sm">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
