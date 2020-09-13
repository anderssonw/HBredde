<template>
    <v-container>
        <BoterForm />
    </v-container>
</template>

<script>
// @ is an alias to /src
import BoterForm from '../components/BoterForm'
export default {
    name: 'Boter',
    components: {
        BoterForm: BoterForm,
    },

    data: () => ({
        penalties: [
            {
                nameSender: 'William Andersson',
                nameReceiver: [
                    {
                        name: 'Daniel Stjernen',
                    },
                    {
                        name: 'Egil Aas',
                    },
                ],
                offense: '§4-5',
                suggestedPenalty: 1,
                description: 'Utsendte bøter etter MOTM-paragrafen',
                date: '24. juni 2020',
            },
            {
                nameSender: 'William Andersson',
                nameReceiver: [
                    {
                        name: 'Daniel Stjernen',
                    },
                    {
                        name: 'Egil Aas',
                    },
                ],
                offense: '§4-5',
                suggestedPenalty: 1,
                description: 'Utsendte bøter etter MOTM-paragrafen',
                date: '24. juni 2020',
            },
        ],
    }),
}
</script>
