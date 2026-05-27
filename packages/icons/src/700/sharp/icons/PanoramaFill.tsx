import type { SVGProps } from 'react'

export default function PanoramaFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M55-135v-691h851v691H55Zm165-185h521L577-543 446-369l-92-129-134 178Z" />
    </svg>
  )
}
