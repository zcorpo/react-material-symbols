import type { SVGProps, JSX } from 'react'

export default function Kitchen({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M327-643v-99h22v99h-22Zm0 314v-165h22v165h-22ZM212-132v-696h536v696H212Zm22-22h492v-403H234v403Zm0-425h492v-227H234v227Z" />
    </svg>
  )
}
