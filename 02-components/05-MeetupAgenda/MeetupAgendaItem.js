import { getAgendaItemIcons, getAgendaItemDefaultTitles } from './data.js';

export default {
  name: 'MeetupAgendaItem',

  props: {
    agendaItem: {
      type: Object,
      reauired: true
    }
  },

  computed: {
    agendaTitle() {
      return this.agendaItem.title || getAgendaItemDefaultTitles()[this.agendaItem.type]
    },
    agendaTimeLine() {
      return `${this.agendaItem.startsAt} - ${this.agendaItem.endsAt}`
    },
    agendaIcons() {
      return `/assets/icons/icon-${getAgendaItemIcons()[this.agendaItem.type]}.svg`
    }
  },

  template: `<div class="meetup-agenda__item">
      <div class="meetup-agenda__item-col">
        <img class="icon" alt="icon" :src="agendaIcons" />
      </div>
      <div class="meetup-agenda__item-col">{{agendaTimeLine}}</div>
      <div class="meetup-agenda__item-col">
        <h5 class="meetup-agenda__title">{{agendaTitle}}</h5>        
          <p v-if="agendaItem.type === 'talk'">
            <span>{{agendaItem.speaker}}</span>
            <span class="meetup-agenda__dot"></span>
            <span class="meetup-agenda__lang">{{agendaItem.language}}</span>
          </p>
          <p v-if="agendaItem.description">{{agendaItem.description}}</p>
        
      </div>
    </div>`,
};
