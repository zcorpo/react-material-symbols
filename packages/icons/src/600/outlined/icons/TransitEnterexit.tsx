import type { SVGProps } from 'react'

export default function TransitEnterexit({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M227.56-230.39v-423.05h114.22v222.4L646.43-735.7 734-649.26 429.35-344.61h221.26v114.22H227.56Z" />
    </svg>
  )
}
