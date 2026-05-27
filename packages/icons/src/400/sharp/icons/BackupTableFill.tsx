import type { SVGProps } from 'react'

export default function BackupTableFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M260-260h250v-250H260v250Zm0-310h560v-250H260v250Zm310 310h250v-250H570v250Zm-370 60v-680h680v680H200ZM80-80v-680h60v620h620v60H80Z" />
    </svg>
  )
}
