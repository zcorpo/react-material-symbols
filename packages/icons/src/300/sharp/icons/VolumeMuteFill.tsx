import type { SVGProps } from 'react'

export default function VolumeMuteFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M300-380v-200h148.46L620-751.53v543.06L448.46-380H300Z" />
    </svg>
  )
}
