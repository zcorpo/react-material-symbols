import type { SVGProps, JSX } from 'react'

export default function MonitorFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M308-172v-54l30-30H186q-23 0-38.5-15.5T132-310v-424q0-23 15.5-38.5T186-788h588q23 0 38.5 15.5T828-734v424q0 23-15.5 38.5T774-256H622l30 30v54H308Z" />
    </svg>
  )
}
