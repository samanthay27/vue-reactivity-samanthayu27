<template>
    <div>
        <h2>{{ index.name }}</h2>
        <img :src="index.profileimg" alt=""/>
    </div>
<!--     card stuff for the index -->
</template>

<script>
import { ref } from "vue";
const props = defineProps({
  index: Object,
});
</script>

<style scoped>

</style>