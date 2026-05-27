import type { SVGProps, JSX } from 'react'

export default function LaptopChromebookFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M20-193.85v-45.38h80v-570h760v570h80v45.38H20Zm377.15-45.38h167.31v-37H397.15v37Z" />
    </svg>
  )
}
