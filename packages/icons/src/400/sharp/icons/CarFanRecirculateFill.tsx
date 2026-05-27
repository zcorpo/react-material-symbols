import type { SVGProps, JSX } from 'react'

export default function CarFanRecirculateFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M255-160q-40 0-72.5-23.5T133-243H0v-309h120l80-228h397l79 134-99 116h-99l-78-78-128 128 128 128 78-78h144l121-141 217 18v310H827q-17 37-49.5 60T705-160q-40 0-72.5-23.5T583-243H377q-17 37-49.5 60T255-160Zm145-234 28-28-37-38h218l239-279-30-26-227 265H391l37-38-28-28-86 86 86 86Z" />
    </svg>
  )
}
