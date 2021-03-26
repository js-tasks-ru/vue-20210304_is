<template>
    <div class="toast" :class="[success ? 'toast_success' : 'toast_error']">
      <app-icon :icon="iconText" />
      <span>{{title}}</span>
    </div>
</template>

<script>
import AppIcon from './AppIcon';

export default ({
    components: { AppIcon },

    props: {
        title: String,
        success: Boolean
    },

    computed: {
        iconText() {
            if(!this.success) {
                return 'alert-circle'
            }

            return 'check-circle'            
        }
    }
    
})
</script>
