import type { SVGProps } from 'react'

export default function ImageAspectRatioFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M241-499h60v-60h-60v60Zm170 0h60v-60h-60v60Zm168 175h60v-60h-60v60Zm0-175h60v-60h-60v60ZM80-160v-640h800v640H80Z" />
    </svg>
  )
}
