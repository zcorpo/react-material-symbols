import type { SVGProps } from 'react'

export default function CalendarViewWeek({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M514-229h119v-502H514v502Zm-185 0h118v-502H329v502Zm-180 0h120v-502H149v502Zm544 0h118v-502H693v502ZM55-135v-691h851v691H55Z" />
    </svg>
  )
}
