import type { SVGProps, JSX } from 'react'

export default function FlashlightOffFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M351-132v-427L106-804l16-16 682 683-15 16-228-228v217H351Zm-83-647v-49h376v93H312l-44-44Zm293 293L334-713h310v52l-83 124v51Z" />
    </svg>
  )
}
