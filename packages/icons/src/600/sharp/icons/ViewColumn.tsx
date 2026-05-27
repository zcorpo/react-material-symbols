import type { SVGProps } from 'react'

export default function ViewColumn({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M100.78-185.87V-774.7h759v588.83h-759ZM180-265.09h147v-429.82H180v429.82Zm226.22 0h147.56v-429.82H406.22v429.82Zm226.78 0h147v-429.82H633v429.82Z" />
    </svg>
  )
}
