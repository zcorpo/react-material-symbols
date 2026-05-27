import type { SVGProps } from 'react'

export default function SendFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M140-190v-226.92L403.92-480 140-544.69V-770l688.46 290L140-190Z" />
    </svg>
  )
}
