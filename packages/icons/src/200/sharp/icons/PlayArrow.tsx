import type { SVGProps } from 'react'

export default function PlayArrow({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M360-273.77v-415.38l326.15 207.69L360-273.77Zm30.77-207.69Zm0 151 239-151-239-151v302Z" />
    </svg>
  )
}
