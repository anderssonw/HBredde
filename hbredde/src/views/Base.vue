<template>
    <div class="base">
        <Toolbar />
        <router-view />
    </div>
</template>

<script>
// @ is an alias to /src
import Toolbar from '@/components/Toolbar.vue'

export default {
    name: 'Base',
    components: {
        Toolbar,
    },
}
</script>
