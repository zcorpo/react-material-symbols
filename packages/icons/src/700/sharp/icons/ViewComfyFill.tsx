import type { SVGProps } from 'react'

export default function ViewComfyFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M55-510v-316h851v316H55Zm330 375v-315h521v315H385Zm-330 0v-315h270v315H55Z" />
    </svg>
  )
}
