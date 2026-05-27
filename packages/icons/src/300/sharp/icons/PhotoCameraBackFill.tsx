import type { SVGProps, JSX } from 'react'

export default function PhotoCameraBackFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M100-140v-594.92h195.08L368.46-820h223.08l73.38 85.08H860V-140H100Zm179.54-133.08H688L562.15-438.92 445.77-287.69l-81.62-97.85-84.61 112.46Z" />
    </svg>
  )
}
