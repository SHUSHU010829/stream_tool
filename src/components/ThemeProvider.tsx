"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ComponentProps } from "react"

/**
 * 主題提供者組件
 * 使用 next-themes 來管理明暗模式狀態
 */
export function ThemeProvider({
  children,
  ...props
}: ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      {...props}
    >
      {children}
    </NextThemesProvider>
  )
}
