import type { SVGProps } from 'react'

export default function DockToLeftFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M182.15-182.15H566.3v-595.7H182.15v595.7Zm-68.13 68.13v-732.2h732.2v732.2h-732.2Z" />
    </svg>
  )
}
