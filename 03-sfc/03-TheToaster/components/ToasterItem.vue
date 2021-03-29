<template>
    <div class="toast" :class="iconText.class">
      <app-icon :icon="iconText.icon" />
      <span>{{title}}</span>
    </div>
</template>

<script>
import AppIcon from './AppIcon';

export default ({
    components: { AppIcon },

    props: {
        title: String,
        success: Boolean,
        type: {
            type: String,
            required: true,
            default: 'alert-circle'
        }
    },

    computed: {
        iconText() {
            if(this.type === 'error') {
                return {
                    icon: 'alert-circle',
                    class: 'toast_error'
                }
            }

            if(this.type === 'success') {
                return {
                    icon: 'check-circle',
                    class: 'toast_success'
                }
            }

            return null

                      
        }
    }
    
})
</script>
