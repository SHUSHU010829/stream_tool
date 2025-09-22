"use client"

import { useEffect, useState } from "react"

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // 計算是否接近頁面底部
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      // 當滾動到距離底部 100px 以內時顯示 footer
      const isNearBottom = scrollTop + windowHeight >= documentHeight - 100
      setIsVisible(isNearBottom)
    }

    // 初始檢查
    handleScroll()

    // 添加滾動事件監聽器
    window.addEventListener("scroll", handleScroll, { passive: true })

    // 清理事件監聽器
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  if (!isVisible) return null

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-t border-gray-200 dark:border-gray-700 transition-all duration-300 ease-in-out transform translate-y-0">
      <div className="container mx-auto px-4 py-5">
        <div className="flex items-center justify-between">
          {/* 左側版權資訊 */}
          <div className="text-xs text-gray-600 dark:text-gray-400 font-nunito font-bold">
            All rights reserved 2025 © SHU
          </div>

          {/* 右側回到頂部按鈕 */}
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-xs font-nunito font-bold text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors duration-200 group"
            aria-label="回到頂部"
          >
            <svg
              className="w-4 h-4 transform group-hover:-translate-y-1 transition-transform duration-200"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
            <span>To Top</span>
          </button>
        </div>
      </div>
    </footer>
  )
}
