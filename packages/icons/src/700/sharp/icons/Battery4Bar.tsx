import type { SVGProps, JSX } from 'react'

export default function Battery4Bar({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M344-500h272v-247H344v247ZM249-53v-789h134v-64h194v64h134v789H249Z" />
    </svg>
  )
}
