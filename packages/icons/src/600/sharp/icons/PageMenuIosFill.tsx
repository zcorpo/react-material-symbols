import type { SVGProps, JSX } from 'react'

export default function PageMenuIosFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M105.87-88.91v-78.65h497.87v78.65H105.87Zm0-178.65v-79.22H854.7v79.22H105.87Zm0-179.22v-424.87H854.7v424.87H105.87Z" />
    </svg>
  )
}
