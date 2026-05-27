import type { SVGProps, JSX } from 'react'

export default function MobileCancelFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m378-356 102-102.77L582.77-356 604-378 502-480l102-102.77L582.77-604 480-502 378-604l-22 21.23L458.77-480 356-378l22 22ZM240-80v-800h481.85v196.15H760v138.39h-38.15V-80H240Z" />
    </svg>
  )
}
