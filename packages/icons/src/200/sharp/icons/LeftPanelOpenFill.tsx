import type { SVGProps, JSX } from 'react'

export default function LeftPanelOpenFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M508.54-596v232l116.77-116-116.77-116ZM353.92-190.77h415.31v-578.46H353.92v578.46ZM160-160v-640h640v640H160Z" />
    </svg>
  )
}
