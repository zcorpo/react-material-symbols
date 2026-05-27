import type { SVGProps } from 'react'

export default function TextSelectMoveDownFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M130-780v-60h700v60H130Zm350 486L334-440l42-42 74 73v-261h60v261l74-73 42 42-146 146ZM130-120v-60h700v60H130Z" />
    </svg>
  )
}
