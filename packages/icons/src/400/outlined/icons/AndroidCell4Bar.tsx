import type { SVGProps } from 'react'

export default function AndroidCell4Bar({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M60-160v-308h100v308H60Zm247 0v-411h100v411H307Zm246 0v-515h100v515H553Zm247 0v-639h100v639H800Z" />
    </svg>
  )
}
