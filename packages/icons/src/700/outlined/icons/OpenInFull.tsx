import type { SVGProps, JSX } from 'react'

export default function OpenInFull({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M95-95v-334h94v173l515-515H531v-95h335v335h-95v-173L256-189h173v94H95Z" />
    </svg>
  )
}
