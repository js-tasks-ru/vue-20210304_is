<template>
    <div>
        <button @click.prevent="increment">{{count}}</button>
    </div>
</template>

<script>
export default {
    props: {
        count: {
            type: Number,            
            default: 0
        }
    },

    model: {
        prop: 'count',
        event: 'click'
    },    
    
    methods: {        
        increment() {
            this.$emit('increment', this.count + 1);
        }
    }

   
};
</script>

<style></style>
