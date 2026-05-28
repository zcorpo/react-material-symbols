import type { SVGProps, JSX } from 'react'

export default function FolderCopyFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M92-184v-486h22v464h646v22H92Zm96-96v-548h264l80 80h336v468H188Z" />
    </svg>
  )
}
