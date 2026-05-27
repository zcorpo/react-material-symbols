import type { SVGProps, JSX } from 'react'

export default function SendFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M114.5-154.26v-245.72L424.63-480 114.5-562.02v-243.72L887.17-480 114.5-154.26Z" />
    </svg>
  )
}
