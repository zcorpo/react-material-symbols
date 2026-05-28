import type { SVGProps, JSX } from 'react'

export default function AlignVerticalCenterFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M267-95v-338H55v-94h212v-339h134v339h158v-219h134v219h213v94H693v218H559v-218H401v338H267Z" />
    </svg>
  )
}
