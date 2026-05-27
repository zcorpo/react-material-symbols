import type { SVGProps, JSX } from 'react'

export default function Edit({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M188-189h45l421-420-43-44-423 421v43ZM95-95v-176l623-624 179 175L272-95H95Zm668-624-42-43 42 43Zm-130 87-22-21 43 44-21-23Z" />
    </svg>
  )
}
