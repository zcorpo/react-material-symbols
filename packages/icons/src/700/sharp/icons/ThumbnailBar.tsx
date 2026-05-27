import type { SVGProps } from 'react'

export default function ThumbnailBar({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M55-135v-691h851v691H55Zm371-94h385v-502H426v502Zm-95 0v-502H149v502h182Zm-182 0v-502 502Zm182 0h95-95Zm0-502h95-95Z" />
    </svg>
  )
}
