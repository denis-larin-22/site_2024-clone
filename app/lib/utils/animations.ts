// Framer motion animations settings

interface AnimationSettings {
    containerAnimation: {
        hidden: any,
        visible: any
    },
    itemAnimation: {
        hidden: any,
        visible: any
    }
}

export const getFilterAnimation = (): AnimationSettings => ({
    containerAnimation: {
        hidden: { opacity: 1, scale: 0, y: "-100px" },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                delayChildren: 0.1,
                staggerChildren: 0.02
            }
        }
    },
    itemAnimation: {
        hidden: { y: 5, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    }
})