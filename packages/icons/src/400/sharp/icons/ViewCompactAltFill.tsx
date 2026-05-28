import type { SVGProps, JSX } from 'react'

export default function ViewCompactAltFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M325-325h140v-140H325v140Zm0-170h140v-140H325v140Zm170 170h140v-140H495v140Zm0-170h140v-140H495v140ZM80-160v-640h800v640H80Z" />
    </svg>
  )
}
