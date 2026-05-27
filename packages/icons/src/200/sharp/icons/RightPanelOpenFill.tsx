import type { SVGProps, JSX } from 'react'

export default function RightPanelOpenFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M451.46-364v-232L334.69-480l116.77 116ZM190.77-190.77h415.31v-578.46H190.77v578.46ZM160-160v-640h640v640H160Z" />
    </svg>
  )
}
