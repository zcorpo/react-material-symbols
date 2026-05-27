import type { SVGProps } from 'react'

export default function PaddingFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M284.69-622.61h56.16v-56.16h-56.16v56.16Zm167.23 0h56.16v-56.16h-56.16v56.16Zm167.23 0h56.16v-56.16h-56.16v56.16ZM140-140v-680h680v680H140Z" />
    </svg>
  )
}
