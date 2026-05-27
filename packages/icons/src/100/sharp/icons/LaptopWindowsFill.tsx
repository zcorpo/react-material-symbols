import type { SVGProps, JSX } from 'react'

export default function LaptopWindowsFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M52-224v-22h134v-29h-54v-461h696v461h-54v29h134v22H52Z" />
    </svg>
  )
}
