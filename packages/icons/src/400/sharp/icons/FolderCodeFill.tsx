import type { SVGProps, JSX } from 'react'

export default function FolderCodeFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M625-61 495-190l130-129 42 42-87 87 87 87-42 42Zm164 0-42-42 87-87-87-87 42-42 130 129L789-61ZM80-160v-640h341l60 60h399v361H625q-77 0-132 53t-58 129v37H80Z" />
    </svg>
  )
}
