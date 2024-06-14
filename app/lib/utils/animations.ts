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
        hidden: { opacity: 0, y: "-50px" },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delayChildren: 0.2,
                staggerChildren: 0.03,
                type: 'tween'
            }
        }
    },
    itemAnimation: {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                type: 'tween'
            }
        },
    }
})