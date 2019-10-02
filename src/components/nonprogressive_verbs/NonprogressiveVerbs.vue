<template>
    <div>
        <div class="row pb-4">
            <div class="col-md-10 offset-md-1">
                <input class="form-control form-control-lg" v-model="search" placeholder="Search..." />
            </div>
        </div>
        <div class="row">
            <div class="col-sm" v-for="(item, index) in filteredItems" v-bind:key="index">
                <ul class="list-group mb-3">
                    <li class="list-group-item list-group-item-dark">
                        {{item.category}}
                    </li>
                    <li class="list-group-item" v-for="(word, i) in item.words" v-bind:key="i">{{word}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "NonprogressiveVerbs",
        data: function () {
            return {
                search: ''
            }
        },
        computed: {
            ...mapGetters({
                nonprogressive_verbs: 'nonprogressive_verbs/items'
            }),
            filteredItems() {
                if (!this.search) {
                    return this.nonprogressive_verbs;
                }

                let filtered = JSON.parse(JSON.stringify(this.nonprogressive_verbs));

                for (let i = 0; i < filtered.length; i++) {
                    filtered[i]['words'] = filtered[i]['words']
                        .filter(word => word.toLocaleLowerCase().startsWith(this.search.toLocaleLowerCase()));
                }
                return filtered;
            }
        },
        created() {
            this.$store.dispatch('nonprogressive_verbs/getItems');
        }
    }
</script>
