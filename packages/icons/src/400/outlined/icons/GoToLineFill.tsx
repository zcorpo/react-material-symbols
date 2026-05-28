import type { SVGProps, JSX } from 'react'

export default function GoToLineFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M430-700v-100h100v100H430Zm0 540v-100h100v100H430Z" />
    </svg>
  )
}
