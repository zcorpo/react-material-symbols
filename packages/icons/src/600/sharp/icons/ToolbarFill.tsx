import type { SVGProps, JSX } from 'react'

export default function ToolbarFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M105.87-635.83V-854.7H854.7v218.87H105.87Zm0 529.96v-450.17H854.7v450.17H105.87Z" />
    </svg>
  )
}
