import type { SVGProps, JSX } from 'react'

export default function TabletFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M34.5-154.02v-652.2h891v652.2h-891Zm158.13-68.13h574.74v-515.7H192.63v515.7Z" />
    </svg>
  )
}
