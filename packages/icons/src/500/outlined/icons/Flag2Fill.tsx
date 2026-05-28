import type { SVGProps, JSX } from 'react'

export default function Flag2Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M194.02-74.02v-772.2h652.2L750.2-644.8l96.02 201.17H262.15v369.61h-68.13Z" />
    </svg>
  )
}
