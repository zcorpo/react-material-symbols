import type { SVGProps } from 'react'

export default function Speed175Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M318-305v-22h22v22h-22Zm325 0v-22h163v-143H643v-185h185v22H665v141h163v187H643Zm-431 0v-328h-80v-22h102v350h-22Zm237 0 84-328H372v-22h186v20l-85 330h-24Z" />
    </svg>
  )
}
