import type { SVGProps } from 'react'

export default function CameraOutdoorFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M135-95v-518.33L480-872l346 258.5V-485H473v296h353v94H135Zm366-122v-240h245v90l80-46v152l-80-46v90H501Z" />
    </svg>
  )
}
