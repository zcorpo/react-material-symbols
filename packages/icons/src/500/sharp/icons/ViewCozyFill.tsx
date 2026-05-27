import type { SVGProps } from 'react'

export default function ViewCozyFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M114.02-538.33v-307.89h307.89v307.89H114.02Zm0 424.31v-307.89h307.89v307.89H114.02Zm424.31-424.31v-307.89h307.89v307.89H538.33Zm0 424.31v-307.89h307.89v307.89H538.33Z" />
    </svg>
  )
}
