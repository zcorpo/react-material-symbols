import type { SVGProps } from 'react'

export default function HomeHealthFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M430-290h100v-100h100v-100H530v-100H430v100H330v100h100v100ZM160-120v-480l320-240 320 240v480H160Z" />
    </svg>
  )
}
