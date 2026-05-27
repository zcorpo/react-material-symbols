import type { SVGProps } from 'react'

export default function ArrowRight({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M395.93-270.2v-419.6L605.74-480 395.93-270.2Z" />
    </svg>
  )
}
