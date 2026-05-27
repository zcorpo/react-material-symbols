import type { SVGProps } from 'react'

export default function FlashOnFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M394.74-62.78v-324.78H273.78V-885.5h413.39l-78.08 272.83h166.45L394.74-62.78Z" />
    </svg>
  )
}
