'use client'

import { useEffect, useState } from 'react'

import { Button, DarkThemeIcon, LightThemeIcon } from '@/ui'

export function ThemeSwitcher() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark')
      setIsDark(true)
    } else {
      document.documentElement.classList.remove('dark')
      setIsDark(false)
    }
  }, [])

  function handleSwitchTheme() {
    document.documentElement.classList.toggle('dark')
    setIsDark(!isDark)
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }

  return (
    <Button
      variant="ghost"
      className="border border-primary-light w-15 h-10 rounded-md hover:bg-primary-dark"
      onClick={handleSwitchTheme}
    >
      {isDark
        ? <LightThemeIcon className='text-primary-light' />
        : <DarkThemeIcon className='text-primary-light' />
      }
    </Button>
  )
}
