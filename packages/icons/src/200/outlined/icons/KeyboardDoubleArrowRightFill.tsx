import type { SVGProps, JSX } from 'react'

export default function KeyboardDoubleArrowRightFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M434.08-480.23 243.77-671.31l22-21.23 212.31 212.31-212.31 212.31-22-22 190.31-190.31Zm239.15 0L482.92-671.31l21.23-21.23 212.31 212.31-212.31 212.31-21.23-22 190.31-190.31Z" />
    </svg>
  )
}
