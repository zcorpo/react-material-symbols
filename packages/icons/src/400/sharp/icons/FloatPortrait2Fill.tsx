import type { SVGProps, JSX } from 'react'

export default function FloatPortrait2Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M280-530h270v-230H280v230ZM800-80H160v-800h640v800Z" />
    </svg>
  )
}
