import type { SVGProps, JSX } from 'react'

export default function FilterAlt({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M452-212v-246L222-748h516L508-458v246h-56Zm28-246 211-268H269l211 268Zm0 0Z" />
    </svg>
  )
}
