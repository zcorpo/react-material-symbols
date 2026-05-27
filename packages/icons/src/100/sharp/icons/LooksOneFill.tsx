import type { SVGProps } from 'react'

export default function LooksOneFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M510-305h22v-350H429v22h81v328Zm278 133H172v-616h616v616Z" />
    </svg>
  )
}
