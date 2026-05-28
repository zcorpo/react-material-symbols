import type { SVGProps, JSX } from 'react'

export default function DropdownFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M494.08-494.08h226.15v-226.15H494.08v226.15ZM160-160v-640h640v640H160Z" />
    </svg>
  )
}
