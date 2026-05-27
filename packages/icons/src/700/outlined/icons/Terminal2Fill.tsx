import type { SVGProps } from 'react'

export default function Terminal2Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M491-135v-94h335v94H491ZM199-323l-66-67 183-184-183-184 66-67 251 251-251 251Z" />
    </svg>
  )
}
