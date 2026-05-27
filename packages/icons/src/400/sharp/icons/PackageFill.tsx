import type { SVGProps, JSX } from 'react'

export default function PackageFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M280-280h200v-80H280v80ZM120-120v-720h720v720H120Zm200-660v329l160-80 160 80v-329H320Z" />
    </svg>
  )
}
