import type { SVGProps, JSX } from 'react'

export default function TurnSlightRightFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M343-135v-351l244-245H460v-95h289v289h-95v-127L437-448v313h-94Z" />
    </svg>
  )
}
