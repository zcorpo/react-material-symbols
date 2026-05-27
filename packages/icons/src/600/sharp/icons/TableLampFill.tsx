import type { SVGProps } from 'react'

export default function TableLampFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M510.39-120v-79.78h339.22V-120H510.39Zm130-119.78v-445.13H448.48v173.39H86l147.16-336.96h215.32v83.78h271.13v524.92h-79.22Z" />
    </svg>
  )
}
