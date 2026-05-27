import type { SVGProps } from 'react'

export default function SettopComponentFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M74.02-273.3v-413.63h812.2v413.63H74.02Zm149.57-175.27h221.19v-62.86H223.59v62.86ZM561.91-450h60v-60h-60v60Zm120 0h60v-60h-60v60Z" />
    </svg>
  )
}
