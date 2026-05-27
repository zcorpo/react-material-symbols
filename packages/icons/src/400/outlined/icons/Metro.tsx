import type { SVGProps, JSX } from 'react'

export default function Metro({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M120-120v-720h147l213 557 212-557h148v720H740v-559L525-121h-90L220-675v555H120Z" />
    </svg>
  )
}
