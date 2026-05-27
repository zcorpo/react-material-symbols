import type { SVGProps } from 'react'

export default function SelectWindow2Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M817.85-363.46v-325.91H238.74v-196.85h647.48v522.76h-68.37ZM74.02-74.02v-555.35h684.07v555.35H74.02Z" />
    </svg>
  )
}
