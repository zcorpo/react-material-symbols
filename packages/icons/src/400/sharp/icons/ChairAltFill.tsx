import type { SVGProps, JSX } from 'react'

export default function ChairAltFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M200-120v-368h120v-90H200v-262h560v262H640v90h120v368h-60v-122H260v122h-60Zm180-368h200v-90H380v90Z" />
    </svg>
  )
}
