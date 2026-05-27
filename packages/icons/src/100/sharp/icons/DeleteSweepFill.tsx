import type { SVGProps, JSX } from 'react'

export default function DeleteSweepFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M594-263v-22h104v22H594Zm0-334v-22h228v22H594Zm0 167v-22h187v22H594ZM180-651h-42v-22h149v-23h77v23h149v22h-42v399H180v-399Z" />
    </svg>
  )
}
