import type { SVGProps, JSX } from 'react'

export default function VolumeMute({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M332-412v-136h130l126-126v388L462-412H332Zm22-22h118l94 93v-278l-94 93H354v92Zm106-46Z" />
    </svg>
  )
}
