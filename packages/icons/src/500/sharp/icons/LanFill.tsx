import type { SVGProps, JSX } from 'react'

export default function LanFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M114.5-74.5v-276.93h121.43v-161.2h211.44v-95.94H325.93V-885.5h308.14v276.93H512.63v95.94h211.44v161.2H845.5V-74.5H538.57v-276.93h120v-95.94H301.43v95.94h120V-74.5H114.5Z" />
    </svg>
  )
}
