import type { SVGProps } from 'react'

export default function VariablesFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M172-332v-296h616v296H172Z" />
    </svg>
  )
}
