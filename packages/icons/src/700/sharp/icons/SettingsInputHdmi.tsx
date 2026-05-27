import type { SVGProps } from 'react'

export default function SettingsInputHdmi({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M295-55v-129L175-414v-258h40v-234h531v234h40v258L666-184v129H295Zm14-617h81v-79h51v79h78v-79h51v79h81v-139H309v139Zm79 523h184v-60l119-231v-137H269v137l119 231v60Zm92-291Z" />
    </svg>
  )
}
