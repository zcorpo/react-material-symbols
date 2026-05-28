import type { SVGProps, JSX } from 'react'

export default function SplitscreenFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M160-540.69V-800h640v259.31H160ZM160-160v-258.77h640V-160H160Z" />
    </svg>
  )
}
