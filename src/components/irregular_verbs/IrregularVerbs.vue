<template>
    <div>
        <div class="row pb-4">
            <div class="col-md-10 offset-md-1">
                <input class="form-control form-control-lg" v-model="search" placeholder="Search..." />
            </div>
        </div>
        <div v-if="filteredItems.length">
            <div class="row font-weight-bold pb-2">
                <div class="col">Present</div>
                <div class="col">Past simple</div>
                <div class="col">Past participle</div>
            </div>
            <IrregularVerbItem class="py-2 border-top" v-for="(item, index) in filteredItems" v-bind:item="item" v-bind:key="index"></IrregularVerbItem>
        </div>
        <div class="alert alert-warning text-center" v-else>No items found</div>
    </div>
</template>

<script>
import {mapGetters} from "vuex";
import IrregularVerbItem from "./IrregularVerbItem";

export default {
    name: 'IrregularVerbs',
    data: function () {
        return {
            search: ''
        }
    },
    components: {
        IrregularVerbItem
    },
    computed: {
        ...mapGetters({
            irregular_verbs: 'irregular_verbs/items'
        }),
        filteredItems() {
            if (!this.search) {
                return this.irregular_verbs;
            }

            return this.irregular_verbs
                .filter(verbForms => verbForms[0].toLocaleLowerCase().startsWith(this.search.toLocaleLowerCase()));
        }
    },
    created() {
        this.$store.dispatch('irregular_verbs/getItems');
    }
}
</script>
