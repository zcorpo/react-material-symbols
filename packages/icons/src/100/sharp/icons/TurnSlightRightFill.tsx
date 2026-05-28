import type { SVGProps, JSX } from 'react'

export default function TurnSlightRightFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M386-172v-295l260-259H507v-22h176v176h-22v-139L408-459v287h-22Z" />
    </svg>
  )
}
