import type { SVGProps } from 'react'

export default function CreateNewFolderFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80-160v-640h341l60 60h399v580H80Zm470-160h60v-90h90v-60h-90v-90h-60v90h-90v60h90v90Z" />
    </svg>
  )
}
