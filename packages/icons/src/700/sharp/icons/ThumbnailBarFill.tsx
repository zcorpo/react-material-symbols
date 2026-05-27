import type { SVGProps, JSX } from 'react'

export default function ThumbnailBarFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M55-135v-691h293v691H55Zm353 0v-691h498v691H408Z" />
    </svg>
  )
}
