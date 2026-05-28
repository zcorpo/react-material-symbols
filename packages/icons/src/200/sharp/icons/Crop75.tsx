import type { SVGProps, JSX } from 'react'

export default function Crop75({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M160-240v-480h640v480H160Zm30.77-30.77h578.46v-418.46H190.77v418.46Zm0 0v-418.46 418.46Z" />
    </svg>
  )
}
