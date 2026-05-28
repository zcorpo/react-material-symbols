import type { SVGProps, JSX } from 'react'

export default function Reorder({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M114.02-194.02v-66.46h732.2v66.46h-732.2Zm0-168.91v-66.46h732.2v66.46h-732.2Zm0-167.68v-66.46h732.2v66.46h-732.2Zm0-169.15v-66.46h732.2v66.46h-732.2Z" />
    </svg>
  )
}
