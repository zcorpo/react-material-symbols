import type { SVGProps, JSX } from 'react'

export default function DetectorOfflineFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m391-64-67-67 89-89-89-89 67-66 89 89 89-89 67 66-89 89 89 89-67 67-89-89-89 89Zm-94-583 18 60h331l17-60H297Zm-59 155-38-155H65v-249h831v249H760l-40 155H238Z" />
    </svg>
  )
}
