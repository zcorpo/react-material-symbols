import type { SVGProps } from 'react'

export default function PottedPlantFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m311-132-55-217h446l-55 217H311Zm168-502q0-73 61-127.5T675-827q-12 68-64 122t-121 70v105h298v154H172v-154h296v-105q-69-16-120.5-69.5T283-827q73 11 134.5 66T479-634Z" />
    </svg>
  )
}
