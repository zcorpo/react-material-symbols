import type { SVGProps } from 'react'

export default function MitreFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M566-409v-142h80v-181h-80v-142h182v142h-80v181h80v142H566ZM212-86v-142h80v-181h-80v-142h80v-181h-80v-142h182v142h-80v181h80v142h-80v181h80v142H212Z" />
    </svg>
  )
}
