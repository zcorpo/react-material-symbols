import type { SVGProps, JSX } from 'react'

export default function ThumbsUpDownFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M0-400v-351l209-209 39 44-34 156h266v102L371-400H0ZM751 0l-39-44 34-156H480v-102l109-258h371v351L751 0Z" />
    </svg>
  )
}
