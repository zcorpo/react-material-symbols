import type { SVGProps } from 'react'

export default function WorkFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M100-140v-560h240v-140h280v140h240v560H100Zm285.39-560h189.22v-94.61H385.39V-700Z" />
    </svg>
  )
}
