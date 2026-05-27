import type { SVGProps } from 'react'

export default function OutboxAltFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m282.69-307.92 369.69-173.31-369.69-172.54v111.85l155.85 60.69-155.85 60.69v112.62Zm369.69-173.31ZM160-160v-640h640v640H160Z" />
    </svg>
  )
}
