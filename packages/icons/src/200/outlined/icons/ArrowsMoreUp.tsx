import type { SVGProps, JSX } from 'react'

export default function ArrowsMoreUp({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M520-240v-360H160v-30.77h390.77V-240H520Zm169.23-168.46v-360h-360v-30.77H720v390.77h-30.77Z" />
    </svg>
  )
}
