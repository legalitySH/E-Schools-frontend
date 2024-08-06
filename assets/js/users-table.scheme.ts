export const columns = [
    {
        key: 'id',
        label: '#'
    },
    {
        key: 'email',
        label: 'Email',
    },
    {
        key: 'username',
        label: 'Username',
    },
    {
        key: 'roles',
        label: 'Role',
    },
    {
        key: 'actions'
    }
];

export const actionsScheme = (row) => [
    [
        {
            icon: 'i-heroicons',
            label: 'Grant admin',
            click: () => console.log('Edit', row.id)
        },

    ]
];


