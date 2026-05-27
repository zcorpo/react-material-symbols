import type { SVGProps, JSX } from 'react'

export default function MarkunreadMailboxFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M132-132v-452h140v-244h236v140H294v283h94v-179h440v452H132Z" />
    </svg>
  )
}
