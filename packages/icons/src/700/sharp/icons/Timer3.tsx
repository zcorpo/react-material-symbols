import type { SVGProps, JSX } from 'react'

export default function Timer3({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M325-194v-92h260v-148H367v-92h218v-148H325v-92h352v240l-39 48 39 44v240H325Z" />
    </svg>
  )
}
