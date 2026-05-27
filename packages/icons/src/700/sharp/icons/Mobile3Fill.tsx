import type { SVGProps } from 'react'

export default function Mobile3Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M334-203h290v-94H334v94ZM175-15v-931h608v223h43v193h-43v515H175Z" />
    </svg>
  )
}
