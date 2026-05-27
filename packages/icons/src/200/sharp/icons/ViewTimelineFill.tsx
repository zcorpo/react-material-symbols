import type { SVGProps, JSX } from 'react'

export default function ViewTimelineFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M160-160v-640h640v640H160Zm106.15-139.77h187.7v-30.77h-187.7v30.77Zm240-329.69h187.7v-30.77h-187.7v30.77Zm-120 164.84h187.7v-30.76h-187.7v30.76Z" />
    </svg>
  )
}
