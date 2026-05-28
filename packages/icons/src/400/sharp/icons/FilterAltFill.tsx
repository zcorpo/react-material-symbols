import type { SVGProps, JSX } from 'react'

export default function FilterAltFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M400-160v-280L118-800h724L560-440v280H400Z" />
    </svg>
  )
}
