import type { SVGProps, JSX } from 'react'

export default function SyncSavedLocallyOff({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m835-221-77-79h47v-465H293l-95-95h702v639h-65Zm2 203-71-70H17v-72h677l-46-46H62v-585h3l-49-48 51-51L888-69l-51 51ZM555-300 156-699v399h399Zm-29-233Zm-169 33Zm130-71 120-121 67 67-120 121-67-67Z" />
    </svg>
  )
}
