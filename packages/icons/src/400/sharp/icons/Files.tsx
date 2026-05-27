import type { SVGProps, JSX } from 'react'

export default function Files({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80-160v-560h314l80-80h406v640H80Zm119-280h241v-241L199-440Zm-59-26 194-194H140v194Zm0 86v160h680v-520H500v360H140Zm310-130Z" />
    </svg>
  )
}
