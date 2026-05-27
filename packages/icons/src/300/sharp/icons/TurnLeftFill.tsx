import type { SVGProps } from 'react'

export default function TurnLeftFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M625-180v-355.69H226.69L319.38-443l-31.61 32L140-558.38l147.77-147.77 31.61 32-92.69 93.07h443.69V-180H625Z" />
    </svg>
  )
}
