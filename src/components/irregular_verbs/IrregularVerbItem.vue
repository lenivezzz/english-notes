<template>
    <div class="row">
        <div class="col">{{ item[0] }}</div>
        <div class="col">{{ item[1] }}</div>
        <div class="col">{{ item[2] }}</div>
    </div>
</template>

<script>
    export default {
        name: 'IrregularVerbItem',
        props: {
            item: Array
        }
    }
</script>
