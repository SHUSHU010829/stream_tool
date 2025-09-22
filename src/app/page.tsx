"use client"

import { Button } from "@/components/animate-ui/components/buttons/button"
import { ThemeTogglerButton } from "@/components/animate-ui/components/buttons/theme-toggler"

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      {/* 導航欄 */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                Stream Tool
              </h1>
            </div>
            <ThemeTogglerButton variant="ghost" size="sm" />
          </div>
        </div>
      </nav>
      <main className="container mx-auto px-4 py-8">
        <Button>Start</Button>
      </main>
    </div>
  )
}
