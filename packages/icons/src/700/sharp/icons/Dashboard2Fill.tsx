import type { SVGProps, JSX } from 'react'

export default function Dashboard2Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M571-135v-315h335v315H571ZM450-510v-316h456v316H450ZM55-135v-315h456v315H55Zm0-375v-316h335v316H55Z" />
    </svg>
  )
}
