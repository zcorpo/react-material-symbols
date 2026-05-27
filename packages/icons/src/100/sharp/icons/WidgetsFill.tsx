import type { SVGProps } from 'react'

export default function WidgetsFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M652-502 504-650l148-148 148 148-148 148Zm-448-43v-211h210v211H204Zm341 341v-210h211v210H545Zm-341 0v-210h210v210H204Z" />
    </svg>
  )
}
