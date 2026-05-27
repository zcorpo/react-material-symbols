import type { SVGProps } from 'react'

export default function ShiftLockFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M372-306v-143H230l250-349 250 349H588v143H372ZM206-184v-22h548v22H206Z" />
    </svg>
  )
}
