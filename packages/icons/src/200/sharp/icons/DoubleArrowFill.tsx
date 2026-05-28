import type { SVGProps, JSX } from 'react'

export default function DoubleArrowFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m283.54-220 190.77-260-190.77-260h37.84l190.77 260-190.77 260h-37.84Zm238.15 0 190.77-260-190.77-260h37.85l190.77 260-190.77 260h-37.85Z" />
    </svg>
  )
}
