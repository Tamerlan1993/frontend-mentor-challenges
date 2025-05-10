import { tv } from "tailwind-variants";

export const input = tv({
    base: 'border rounded h-10 font-karla-regular',
    variants: {
        color: {
            normal: 'border-grey-medium',
            error: 'border-red',
        },
    },
    defaultVariants: {
        color: 'normal',
    },
});