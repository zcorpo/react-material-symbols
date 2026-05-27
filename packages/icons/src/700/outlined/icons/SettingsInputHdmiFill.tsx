import type { SVGProps, JSX } from 'react'

export default function SettingsInputHdmiFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M295-55v-129L175-414v-258h40v-140q0-37.03 28.19-65.51Q271.39-906 308-906h344q37.03 0 65.51 28.49Q746-849.03 746-812v140h40v258L666-184v129H295Zm14-617h81v-79h51v79h78v-79h51v79h81v-139H309v139Z" />
    </svg>
  )
}
