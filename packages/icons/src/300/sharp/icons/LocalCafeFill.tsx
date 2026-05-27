import type { SVGProps } from 'react'

export default function LocalCafeFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M180-140v-45.39h600V-140H180Zm0-140.77V-820h680v250H709v289.23H180Zm529-334.61h105.61v-159.23H709v159.23Z" />
    </svg>
  )
}
