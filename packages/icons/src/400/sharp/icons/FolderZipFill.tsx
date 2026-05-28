import type { SVGProps, JSX } from 'react'

export default function FolderZipFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80-160v-640h341l60 60h399v580H80Zm468-60h92v-92h92v-92h-92v-92h92v-92h-92v-92h-92v92h92v92h-92v92h92v92h-92v92Z" />
    </svg>
  )
}
