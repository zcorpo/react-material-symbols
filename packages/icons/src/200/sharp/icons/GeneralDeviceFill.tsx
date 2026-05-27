import type { SVGProps } from 'react'

export default function GeneralDeviceFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M350.77-266.15V-800h258.46v533.85H350.77Zm0 81.54v-30.77h258.46v30.77H350.77Z" />
    </svg>
  )
}
