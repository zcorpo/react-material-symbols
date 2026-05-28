import type { SVGProps, JSX } from 'react'

export default function ArrowUpwardAltFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M470-277v-414L292-514l-16-16 204-204 205 204-16 16-177-177v414h-22Z" />
    </svg>
  )
}
