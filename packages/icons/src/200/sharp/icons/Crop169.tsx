import type { SVGProps, JSX } from 'react'

export default function Crop169({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M160-320v-320h640v320H160Zm30.77-30.77h578.46v-258.46H190.77v258.46Zm0 0v-258.46 258.46Z" />
    </svg>
  )
}
