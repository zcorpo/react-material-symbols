import type { SVGProps, JSX } from 'react'

export default function TileSmallFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M95-145v-282h332v282H95Zm437 0v-282h334v282H532ZM95-533v-283h332v283H95Zm437 0v-283h334v283H532Z" />
    </svg>
  )
}
