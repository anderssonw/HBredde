<template>
    <v-card class="py-3 px-8" width="50%">
        <v-card-title class="pa-0">
            Meld inn bot:
            <v-spacer />
            <v-btn icon @click="showForm = !showForm">
                <v-icon>{{
                    showForm ? 'mdi-chevron-up' : 'mdi-chevron-down'
                }}</v-icon>
            </v-btn>
        </v-card-title>
        <v-expand-transition>
            <div v-show="showForm" class="px-6">
                <v-select
                    v-model="fineInfo.nameSender"
                    :items="namePlayers"
                    label="Navn på innsender"
                    item-value="name"
                    item-text="name"
                ></v-select>
                <v-select
                    v-model="fineInfo.nameReceivers"
                    :items="namePlayers"
                    label="Hvem bøtelegger du?"
                    item-value="name"
                    item-text="name"
                    multiple
                ></v-select>
                <v-card-text class="text--secondary pa-0">
                    Dato for regelbrudd:
                </v-card-text>
                <datepicker
                    is-dark
                    v-model="fineInfo.date"
                    :popover="{ visibility: 'click' }"
                ></datepicker>

                <v-select
                    v-model="fineInfo.offense"
                    :items="namePlayers"
                    label="Regelbrudd"
                    item-value="name"
                    item-text="name"
                ></v-select>

                <v-text-field
                    v-model="fineInfo.suggestedFine"
                    type="number"
                    placeholder="2"
                    label="Forslag til straff:"
                >
                </v-text-field>
                <v-textarea
                    v-model="fineInfo.description"
                    type="text"
                    placeholder="Utsendte bøter etter MOTM-paragrafen"
                    label="Beskriv hendelsen:"
                    clearable
                    auto-grow
                    rows="3"
                >
                </v-textarea>

                <v-card-text class="text--secondary pa-0">
                    Bilde- og videobevis er ikke implementert
                </v-card-text>

                <v-card-actions class="px-0">
                    <v-btn color="success" @click="sendFine">
                        Send inn bot
                    </v-btn>
                </v-card-actions>
            </div>
        </v-expand-transition>
    </v-card>
</template>

<script>
import DatePicker from 'v-calendar/lib/components/date-picker.umd'
// @ is an alias to /src

export default {
    name: 'FineForm',

    props: {},

    components: {
        datepicker: DatePicker,
    },

    data: () => ({
        showForm: false,
        fineInfo: {
            nameSender: '',
            nameReceivers: [],
            date: '',
            offense: '',
            suggestedFine: '',
            description: '',
        },
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
        fines: [
            {
                nameSender: '',
                nameReceivers: [],
                date: '',
                offense: '',
                suggestedFine: '',
                description: '',
            },
        ],
    }),

    methods: {
        sendFine() {
            console.log(this.fineInfo)
        },
    },
}
</script>
<style scoped></style>
