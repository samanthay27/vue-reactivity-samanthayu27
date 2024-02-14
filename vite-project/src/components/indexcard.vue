<template>
    <div>
        <h2>{{ index.name }}</h2>
        <img :src="index.profileimg" alt=""/>
    </div>
</template>

<script>
const props = defineProps({
  index: Object,
});
</script>

<style scoped>

</style>