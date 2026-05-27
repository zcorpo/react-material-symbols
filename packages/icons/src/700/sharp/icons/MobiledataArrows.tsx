import type { SVGProps } from 'react'

export default function MobiledataArrows({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M295-585h94v340l64-63 66 67L342-65 166-241l66-67 63 63v-340Zm359 237h-94v-367l-62 62-68-67 177-176 176 176-67 67-62-62v367Z" />
    </svg>
  )
}
