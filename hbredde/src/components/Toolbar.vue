<template>
    <div>
        <v-navigation-drawer app v-model="drawer" clipped width="13em">
            <v-list nav flat dense>
                <v-list-item to="/">
                    <v-list-item-action>
                        <v-icon>mdi-view-dashboard</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Hjem</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item to="/boter">
                    <v-list-item-action>
                        <v-icon>mdi-cup</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Bøter</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>HBredde</v-toolbar-title>
        </v-toolbar>
    </div>
</template>

<script>
export default {
    name: 'Toolbar',

    data: () => ({
        drawer: false,
    }),

    methods: {},
}
</script>
