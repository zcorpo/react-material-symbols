import type { SVGProps, JSX } from 'react'

export default function FilesFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M55-135v-241h449v-450h402v691H55Zm0-269v-342h341L55-404Zm125-32 264-264v264H180Z" />
    </svg>
  )
}
