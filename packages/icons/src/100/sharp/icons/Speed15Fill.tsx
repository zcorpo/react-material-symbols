import type { SVGProps, JSX } from 'react'

export default function Speed15Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M320-305v-328h-81v-22h103v350h-22Zm108 0v-22h22v22h-22Zm108 0v-22h163v-143H536v-185h185v22H558v141h163v187H536Z" />
    </svg>
  )
}
