import type { SVGProps } from 'react'

export default function ChipsFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M284.69-465.85h390.62v-30.77H284.69v30.77ZM160-160v-640h640v640H160Z" />
    </svg>
  )
}
