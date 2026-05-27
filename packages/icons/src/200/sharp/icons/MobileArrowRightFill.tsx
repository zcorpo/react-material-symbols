import type { SVGProps, JSX } from 'react'

export default function MobileArrowRightFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M343.08-496.15v30.77h215.46L469.15-376l22 22 126-126.77L492.69-606l-22 22 87.85 87.85H343.08ZM240-80v-800h481.85v196.15H760v138.39h-38.15V-80H240Z" />
    </svg>
  )
}
