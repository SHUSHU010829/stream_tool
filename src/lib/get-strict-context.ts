import * as React from "react"

export function getStrictContext<T>(
  name: string
): [React.ComponentType<{ children: React.ReactNode; value: T }>, () => T] {
  const Context = React.createContext<T | null>(null)

  const Provider: React.ComponentType<{
    children: React.ReactNode
    value: T
  }> = ({ children, value }) => {
    return React.createElement(Context.Provider, { value }, children)
  }

  const useContext = (): T => {
    const context = React.useContext(Context)
    if (context === null) {
      throw new Error(`use${name} must be used within ${name}Provider`)
    }
    return context
  }

  return [Provider, useContext]
}

export function createStrictContext<T>(defaultValue?: T): React.Context<T> {
  return React.createContext<T>(defaultValue as T)
}
