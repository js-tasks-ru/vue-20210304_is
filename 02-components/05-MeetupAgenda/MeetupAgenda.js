import MeetupAgendaItem from './MeetupAgendaItem.js';

export default {
  name: 'MeetupAgenda',

  props: {
    agenda: {
      type: Array,
      required: true,
    },
  },

  components: {
    MeetupAgendaItem,
  },

  template: `
    <div class="meetup-agenda">
      <meetup-agenda-item v-for="item in agenda" :key="item.id" :agenda-item="item"></meetup-agenda-item>
    </div>`,
};
