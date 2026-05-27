import type { SVGProps } from 'react'

export default function ModeComment({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M55-215v-691h851v851L746-215H55Zm94-94h623l39 46v-548H149v502Zm0 0v-502 502Z" />
    </svg>
  )
}
