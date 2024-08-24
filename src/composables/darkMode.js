import { useDark } from '@vueuse/core'
import { nextTick } from 'vue'

export const isDark = useDark()

/**
 * dark mode function
 * @param {MouseEvent} event 
 * @returns 
 */
export function toggleDark(event) {
    /**
     * 浏览器支持 startViewTransition 方法并且用户未开启减弱动态效果设置时，才允许显示动画
     */
    const isAppearanceTransition = document.startViewTransition && !window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!isAppearanceTransition) {
        isDark.value = !isDark.value
        return
    }

    const x = event.clientX
    const y = event.clientY
    const endRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
    )
    const transition = document.startViewTransition(async () => {
        isDark.value = !isDark.value
        await nextTick()
    })
    transition.ready.then(() => {
        const clipPath = [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`
        ]
        document.documentElement.animate(
            {
                clipPath: isDark.value ? [...clipPath].reverse() : clipPath
            },
            {
                duration: 400,
                easing: 'ease-out',
                pseudoElement: isDark.value ? '::view-transition-old(root)' : '::view-transition-new(root)'
            }
        )
    })
}