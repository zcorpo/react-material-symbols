import type { SVGProps, JSX } from 'react'

export default function HomeHealthFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M420.39-280.39h119.22v-100h100v-119.22h-100v-100H420.39v100h-100v119.22h100v100ZM145.87-105.87v-501.48L480-858.09l334.7 250.74v501.48H145.87Z" />
    </svg>
  )
}
