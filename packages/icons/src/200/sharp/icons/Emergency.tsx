import type { SVGProps, JSX } from 'react'

export default function Emergency({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M437.54-147.54v-257.69L213.85-276.38l-43.47-73.77L395.08-480l-223.7-128.85 42.47-73.77 223.69 128.85v-258.69h84.92v258.69l223.69-128.85 42.47 73.77L564.92-480l224.7 129.85-43.47 73.77-223.69-128.85v257.69h-84.92Z" />
    </svg>
  )
}
