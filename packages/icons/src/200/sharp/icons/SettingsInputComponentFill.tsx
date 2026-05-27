import type { SVGProps, JSX } from 'react'

export default function SettingsInputComponentFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M157.62-80v-181.07L80-337.36v-112.87h186v112.38l-77.62 76.45V-80h-30.76Zm307 0v-181.07L387-337.36v-112.87h186v112.38l-77.62 76.45V-80h-30.76Zm307 0v-181.07L694-337.36v-112.87h186v112.38l-77.62 76.45V-80h-30.76ZM80-481v-230.15h77.62V-880h30.76v168.85H266V-481H80Zm307 0v-230.15h77.62V-880h30.76v168.85H573V-481H387Zm307 0v-230.15h77.62V-880h30.76v168.85H880V-481H694Z" />
    </svg>
  )
}
