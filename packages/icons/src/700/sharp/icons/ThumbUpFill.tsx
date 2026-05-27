import type { SVGProps, JSX } from 'react'

export default function ThumbUpFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M231-77v-540l267-277 85 62-51 215h407v162L776-77H231ZM46-77v-540h125v540H46Z" />
    </svg>
  )
}
