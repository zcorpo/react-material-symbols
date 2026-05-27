import type { SVGProps } from 'react'

export default function NetworkCell({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m74.02-74.02 812.2-812.2v812.2H74.02Zm609.11-68.13h134.72v-580.22L683.13-587.65v445.5Z" />
    </svg>
  )
}
