import type { SVGProps, JSX } from 'react'

export default function Timer3SelectFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M153.78-196.61v-86.78h260.44v-153.22H155.78v-86.78h258.44v-153.22H153.78v-86.78H501v240L457.61-480 501-436.61v240H153.78Zm442.83 0v-66.22h186.78v-70.56H596.61v-203h253v66.78H662.83v70h186.78v203h-253Z" />
    </svg>
  )
}
