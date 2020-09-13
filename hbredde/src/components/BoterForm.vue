<template>
    <v-card class="pa-12" width="50%">
        <v-card-title>Meld inn bot</v-card-title>
        <v-select
            :items="namePlayers"
            label="Navn på innsender"
            item-value="name"
            item-text="name"
        ></v-select>
        <v-select
            :items="namePlayers"
            label="Hvem bøtelegger du?"
            item-value="name"
            item-text="name"
        ></v-select>
        <v-input></v-input>
        <v-text-field> </v-text-field>
        <v-text-field> </v-text-field>
        <v-text-field> </v-text-field>
        <v-text-field
            v-model="suggestedPenalty"
            type="number"
            placeholder="2"
            label="Forslag til straff:"
        >
        </v-text-field>
    </v-card>
</template>

<script>
// @ is an alias to /src

export default {
    name: 'BoterForm',
    components: {},

    data: () => ({
        namePlayers: [
            {
                name: 'William Andersson1',
            },
            {
                name: 'William Andersson2',
            },
            {
                name: 'William Andersson3',
            },
            {
                name: 'William Andersson4',
            },
            {
                name: 'William Andersson5',
            },
        ],
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
        suggestedPenalty: '',
        description: 'Utsendte bøter etter MOTM-paragrafen',
        date: '24. juni 2020',
    }),
}
</script>
