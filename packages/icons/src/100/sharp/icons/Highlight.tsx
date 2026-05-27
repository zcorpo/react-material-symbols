import type { SVGProps, JSX } from 'react'

export default function Highlight({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m266-639-70-70 16-15 70 70-16 15Zm203-75v-100h22v100h-22Zm225 76-16-16 70-70 16 16-70 70ZM412-132v-170L292-422v-126h376v126L548-302v170H412Zm22-22h92v-158l120-120v-94H314v94l120 120v158Zm46-186Z" />
    </svg>
  )
}
