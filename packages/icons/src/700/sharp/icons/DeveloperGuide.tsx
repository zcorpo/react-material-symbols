import type { SVGProps, JSX } from 'react'

export default function DeveloperGuide({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M95-95v-771h771v771H95Zm85-685v600h600v-600H676v258l-98-59-98 59v-258H180Zm0 600v-600 600Z" />
    </svg>
  )
}
