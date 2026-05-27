import type { SVGProps, JSX } from 'react'

export default function Speed025({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M212-305v-22h22v22h-22Zm351 0v-22h163v-143H563v-185h185v22H585v141h163v187H563Zm-257 0v-187h163v-141H306v-22h185v185H328v143h163v22H306Z" />
    </svg>
  )
}
