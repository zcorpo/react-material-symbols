import type { SVGProps } from 'react'

export default function Speed05({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M321-305v-22h22v22h-22Zm94 0v-22h163v-143H415v-185h185v22H437v141h163v187H415Z" />
    </svg>
  )
}
