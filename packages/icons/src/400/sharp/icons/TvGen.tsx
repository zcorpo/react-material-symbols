import type { SVGProps } from 'react'

export default function TvGen({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M170-120v-80H80v-600h800v600h-90v80h-23l-26-80H220l-27 80h-23Zm-30-140h680v-480H140v480Zm340-240Z" />
    </svg>
  )
}
