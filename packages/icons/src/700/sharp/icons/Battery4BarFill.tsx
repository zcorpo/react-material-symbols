import type { SVGProps } from 'react'

export default function Battery4BarFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M344-500h272v-247H344v247ZM249-53v-789h134v-64h194v64h134v789H249Z" />
    </svg>
  )
}
