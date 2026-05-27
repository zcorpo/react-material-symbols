import type { SVGProps } from 'react'

export default function UniversalLocalFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80-160v-640h800v640H80Zm369-333q-13-13-13-31t13-31q13-13 31-13t31 13q13 13 13 31t-13 31q-13 13-31 13t-31-13Zm31 233q89-75 132.5-140T656-520q0-83-53.5-131.5T480-700q-69 0-122.5 48.5T304-520q0 55 43.5 120T480-260Z" />
    </svg>
  )
}
