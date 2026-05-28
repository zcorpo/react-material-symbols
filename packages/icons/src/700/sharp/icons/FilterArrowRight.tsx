import type { SVGProps, JSX } from 'react'

export default function FilterArrowRight({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M346-135v-300L46-826h776L524-435v300H346Zm429-40-66-66 62-64H614v-94h157l-62-62 66-67 175 177-175 176ZM435-476l194-255H239l196 255Z" />
    </svg>
  )
}
