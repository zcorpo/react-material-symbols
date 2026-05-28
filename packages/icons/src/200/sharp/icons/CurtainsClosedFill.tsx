import type { SVGProps, JSX } from 'react'

export default function CurtainsClosedFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M120-160v-30.77h80V-800h560v609.23h80V-160H120Zm303.46-30.77h113.85v-578.46H423.46v578.46Z" />
    </svg>
  )
}
