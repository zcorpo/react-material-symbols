import type { SVGProps, JSX } from 'react'

export default function WidgetSmallFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M132-132v-187h187v187H132Zm254 0v-187h188v187H386Zm255 0v-187h187v187H641ZM132-386v-188h187v188H132Zm254 0v-188h188v188H386Zm255 0v-188h187v188H641ZM132-641v-187h187v187H132Zm254 0v-187h188v187H386Zm255 0v-187h187v187H641Z" />
    </svg>
  )
}
