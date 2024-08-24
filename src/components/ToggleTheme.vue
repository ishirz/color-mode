<script setup>
import { toggleDark, isDark } from '../composables/darkMode'
</script>

<template>
    <a class="select-none" @click="toggleDark">
        {{ isDark ? 'light' : 'dark' }}
    </a>
</template>

<style>
a {
    text-decoration: none;
    display: flex;
}
.select-none {
    user-select: none;
}
</style>