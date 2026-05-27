import type { SVGProps } from 'react'

export default function CameraOutdoorFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M145.87-105.87v-501.67L480-858.09l334.7 250.46v124.8H460.83v297.74H814.7v79.22H145.87ZM489.7-213.96v-240h245v90l80-46v152l-80-46v90h-245Z" />
    </svg>
  )
}
