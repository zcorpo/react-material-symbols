import type { SVGProps, JSX } from 'react'

export default function PhotoFrame({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M180-202v-50H92v-496h776v496h-88v50H180Zm-66-72h732v-452H114v452Zm165-115h403L560-552 440-398l-79-96-82 105ZM114-274v-452 452Z" />
    </svg>
  )
}
