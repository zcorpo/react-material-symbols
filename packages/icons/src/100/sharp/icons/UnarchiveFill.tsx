import type { SVGProps, JSX } from 'react'

export default function UnarchiveFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M480-536 357-414l15 16 97-97v204h22v-204l97 97 15-16-123-122ZM172-172v-498l95-118h425l96 120v496H172Zm37-510h540l-68-84H278l-69 84Z" />
    </svg>
  )
}
