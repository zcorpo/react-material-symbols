import type { SVGProps, JSX } from 'react'

export default function MobileArrowUpRightFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m382.69-361.23 166.54-166.54v133H580v-186H394V-550h134L360.69-383.46l22 22.23ZM240-80v-800h481.85v196.15H760v138.39h-38.15V-80H240Z" />
    </svg>
  )
}
