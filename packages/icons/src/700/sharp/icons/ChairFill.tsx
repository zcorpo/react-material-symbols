import type { SVGProps, JSX } from 'react'

export default function ChairFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M163-68v-101H17v-421h160v220h606v-220h160v421H797v101h-94v-101H258v101h-95Zm74-356v-226H121v-213h718v213H723v226H237Z" />
    </svg>
  )
}
