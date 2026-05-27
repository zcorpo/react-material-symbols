import type { SVGProps } from 'react'

export default function CheckBoxFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m422.08-344.08 259-259.23-22.23-22.23-236.77 237-116.7-115.92-22.23 22.23 138.93 138.15ZM160-160v-640h640v640H160Z" />
    </svg>
  )
}
