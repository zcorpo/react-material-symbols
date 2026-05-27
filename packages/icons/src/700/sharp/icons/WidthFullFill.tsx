import type { SVGProps } from 'react'

export default function WidthFullFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M55-135v-691h851v691H55Zm94-94h70v-502h-70v502Zm592 0h70v-502h-70v502Z" />
    </svg>
  )
}
