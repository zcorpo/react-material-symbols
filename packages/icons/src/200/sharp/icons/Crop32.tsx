import type { SVGProps, JSX } from 'react'

export default function Crop32({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M160-280v-400h640v400H160Zm30.77-30.77h578.46v-338.46H190.77v338.46Zm0 0v-338.46 338.46Z" />
    </svg>
  )
}
