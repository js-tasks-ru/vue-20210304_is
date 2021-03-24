export default {
  name: 'MeetupCover',

  props: {
    link: String,
    title: String
  },

  computed: {

    bgCover() {
      if (this.link) {
        return `--bg-url: url('${this.link}')`
      }
    }
    
  },

  template: `
    <div class="meetup-cover" :style="bgCover">
        <h1 class="meetup-cover__title">{{title}}</h1>        
    </div>`,
};
