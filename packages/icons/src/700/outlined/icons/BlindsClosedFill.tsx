import type { SVGProps, JSX } from 'react'

export default function BlindsClosedFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M609.9-17q-28.9 0-49.48-19.9T539.84-86H46v-95h80v-693h708v693h80v95H675q0 28.59-19.1 48.79Q636.8-17 609.9-17ZM221-689h349v-90H221v90Zm428 0h90v-90h-90v90ZM221-520h349v-90H221v90Zm428 0h90v-90h-90v90ZM221-350h349v-90H221v90Zm428 0h90v-90h-90v90ZM221-181h349v-90H221v90Zm428 0h90v-90h-90v90Z" />
    </svg>
  )
}
