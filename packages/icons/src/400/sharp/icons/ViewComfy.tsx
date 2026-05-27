import type { SVGProps } from 'react'

export default function ViewComfy({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80-160v-640h800v640H80Zm740-350v-230H140v230h680ZM383-220h437v-230H383v230Zm-243 0h183v-230H140v230Z" />
    </svg>
  )
}
