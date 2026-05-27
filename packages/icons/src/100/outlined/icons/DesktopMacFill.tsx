import type { SVGProps, JSX } from 'react'

export default function DesktopMacFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M391-172v-27l75-75H186q-23 0-38.5-15.5T132-328v-406q0-23 15.5-38.5T186-788h588q23 0 38.5 15.5T828-734v406q0 23-15.5 38.5T774-274H494l75 75v27H391Z" />
    </svg>
  )
}
