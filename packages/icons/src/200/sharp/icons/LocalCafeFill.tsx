import type { SVGProps, JSX } from 'react'

export default function LocalCafeFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M200-160v-30.77h560V-160H200Zm0-141.54V-800h640v220H694v278.46H200Zm494-309.23h115.23v-158.46H694v158.46Z" />
    </svg>
  )
}
