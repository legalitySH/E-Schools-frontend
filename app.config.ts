export default defineAppConfig({
    title: 'E-Schools',

    ui: {
        primary: 'dodger-blue',
        gray: 'neutral',

        button: {
            variant: {
                solid: '!text-white font-light  h-10 !flex justify-center',
            }
        },

        input: {
            base: '!bg-white !text-black'
        },

        select: {
            base: '!bg-white !text-black',
        },

        selectMenu: {
            base: '!bg-white',
            option: {
                active: '!bg-blue-400 !text-black',
                inactive: '!text-black',
                selectedIcon: {
                    wrapper: 'absolute inset-y-0 end-0 flex items-center',
                    padding: 'pe-2',
                    base: 'dark:text-black',
                },

            }

        },

        dropdown: {
            background: '!bg-white',
            base: 'w-64',
            item: {
                rounded: 'rounded-md',
                padding: 'px-1.5 py-1.5',
                active: '!bg-blue-600 !text-white',
                inactive: '!text-black',
            }
        },

        verticalNavigation: {
            font: 'font-light',
            size: '!text-sm',
            padding: 'px-2.5 !py-2',
            active: '!text-black',
            inactive: 'dark:hover:before:!bg-blue-600 !text-black dark:hover:!text-white',
            active: 'text-gray-900 dark:!text-white dark:before:bg-blue-800',
        },

        checkbox: {
            background: '!bg-white',
            base: 'dark:checked:!bg-blue-600',
        },

        table: {
            th: {
                base: 'text-left rtl:text-right',
                padding: 'px-4 py-3.5',
                color: '!text-blue-600 dark:text-white',
                font: 'font-bold',
                size: 'text-sm',
            },
            td: {
                base: 'whitespace-nowrap',
                padding: 'px-4 py-4',
                color: '!text-black dark:text-gray-400',
                font: '',
                size: 'text-sm',
            },
            tr: {
                base: '',
                selected: 'bg-gray-50 dark:!bg-gray-200/50',
                active: 'hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer',
            },
            loadingState: {
                label: 'text-sm text-center dark:text-black dark:font-medium',
                icon: 'w-6 h-6 mx-auto text-gray-400 dark:text-blue-500 mb-4 animate-spin',
            },
            emptyState: {
                wrapper: 'flex flex-col items-center justify-center flex-1 px-6 py-14 sm:px-14',
                label: 'text-sm text-center text-gray-900 dark:text-blue-900',
                icon: 'w-6 h-6 mx-auto text-gray-400 dark:text-black mb-4',
            },
        }
    }
})