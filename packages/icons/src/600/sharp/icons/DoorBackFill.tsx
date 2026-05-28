import type { SVGProps, JSX } from 'react'

export default function DoorBackFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M105.87-105.87v-79.22h80V-854.7H774.7v669.61h80v79.22H105.87ZM417-459q10-10 10-24t-10-24q-10-10-24-10t-24 10q-10 10-10 24t10 24q10 10 24 10t24-10Z" />
    </svg>
  )
}
