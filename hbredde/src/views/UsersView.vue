<template>
    <v-container>
        <v-row>
            <v-col v-for="user in users" :key="user.firstName">
                {{ user.firstName }}
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
// @ is an alias to /src
const axios = require('axios')
export default {
    name: 'UsersView',
    components: {},

    data: () => ({
        users: [],
    }),

    mounted() {
        axios
            .get(
                'https://europe-west1-hbredde-9bb86.cloudfunctions.net/api/users'
            )
            .then(res => {
                this.users = res.data
            })
    },
}
</script>
