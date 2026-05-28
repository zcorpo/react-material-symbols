import type { SVGProps, JSX } from 'react'

export default function LanguageGbEnglish({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M608-360h163v-85H608v85Zm0-157h163v-84H608v84ZM102-280v-400h333v79H189v241h160v-80h-65v-72h152v232H102Zm419 0v-400h284l53 50v103l-53 46 53 46v105l-53 50H521Z" />
    </svg>
  )
}
