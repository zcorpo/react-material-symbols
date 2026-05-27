import type { SVGProps, JSX } from 'react'

export default function LanguageUsColemak({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M529-328h197v-304H529v304Zm-317 22v-348h212v22H234v304h190v22H212Zm295 0v-348h241v348H507Z" />
    </svg>
  )
}
