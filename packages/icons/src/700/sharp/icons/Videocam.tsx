import type { SVGProps } from 'react'

export default function Videocam({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M55-135v-691h691v301l160-160v410L746-435v300H55Zm94-94h502v-502H149v502Zm0 0v-502 502Z" />
    </svg>
  )
}
