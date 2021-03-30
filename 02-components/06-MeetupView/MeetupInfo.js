export default {
  name: 'MeetupInfo',

  props: {
    organizer: {
      type: String,
      required: true,
    },
    place: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
  },

  computed: {
    localDateText() {
      let result = new Date(this.date).toLocaleString(navigator.language, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });

      return result;
    },

    localDateAttribute() {
      let result = new Date(this.date).toISOString().split('T')[0];

      return result;
    },
  },

  template: `
    <ul class="info-list">
      <li>
        <img class="icon info-list__icon" alt="icon" src="/assets/icons/icon-user.svg" />
        {{organizer}}
      </li>
      <li>
        <img class="icon info-list__icon" alt="icon" src="/assets/icons/icon-map.svg" />
        {{place}}
      </li>
      <li>
        <img class="icon info-list__icon" alt="icon" src="/assets/icons/icon-cal-lg.svg" />
        <time :datetime="localDateAttribute">{{localDateText}}</time>
      </li>
    </ul>`,
};
