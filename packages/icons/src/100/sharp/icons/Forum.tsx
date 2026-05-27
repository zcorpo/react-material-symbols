import type { SVGProps } from 'react'

export default function Forum({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M264-332v-62h482v-326h62v500L696-332H264Zm-112-24v-472h520v360H264L152-356Zm22-54 80-80h396v-316H174v396Zm0-112v-284 284Z" />
    </svg>
  )
}
