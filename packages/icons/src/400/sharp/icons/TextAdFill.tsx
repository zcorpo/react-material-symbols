import type { SVGProps, JSX } from 'react'

export default function TextAdFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80-160v-640h800v640H80Zm130-130h540v-60H210v60Zm0-160h540v-60H210v60Zm0-160h378v-60H210v60Z" />
    </svg>
  )
}
