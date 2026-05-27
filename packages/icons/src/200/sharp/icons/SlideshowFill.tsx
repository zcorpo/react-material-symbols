import type { SVGProps, JSX } from 'react'

export default function SlideshowFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M398.54-341.77 612.62-480 398.54-618.23v276.46ZM160-160v-640h640v640H160Z" />
    </svg>
  )
}
