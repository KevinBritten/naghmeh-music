<template>
  <div class="shows">
    <h3>Upcoming Shows</h3>
    <hr />
    <ShowItem
      v-for="show in upcomingShowsSorted"
      :key="show.name"
      :show="show"
      :upcoming="true"
    />
    <h3>Past Shows</h3>
    <hr />
    <ShowItem
      v-for="show in pastShowsSorted"
      :key="show.name"
      :show="show"
      :upcoming="false"
    />
  </div>
</template>

<script>
import sanity from "../sanity";
import ShowItem from "../components/ShowItem.vue";

const query = `*[_type == "shows"]`;

export default {
  components: { ShowItem },
  data() {
    return {
      upcomingShows: [],
      pastShows: [],
    };
  },
  computed: {
    upcomingShowsSorted() {
      return this.upcomingShows.sort(this.sortByDate);
    },
    pastShowsSorted() {
      return this.pastShows.sort(this.sortByDate);
    },
  },
  created() {
    const currentDate = new Date(Date.now());
    this.fetchData().then((payload) => {
      //set shows to past or present once its the day after the show
      // const currentDate = new Date(Date.now());
      payload.forEach((show) => {
        if (this.showIsUpcoming(show, currentDate)) {
          this.upcomingShows.push(show);
        } else {
          this.pastShows.push(show);
        }
      });
    });
  },

  methods: {
    fetchData() {
      this.error = this.post = null;

      return sanity.fetch(query).then(
        (shows) => {
          return shows;
        },
        (error) => {
          this.error = error;
        }
      );
    },
    sortByDate(a, b) {
      if (a.date < b.date) {
        return 1;
      }
      if (a.date > b.date) {
        return -1;
      }
      return 0;
    },
    showIsUpcoming(show, currentDate) {
      var showDate = new Date(show.date);
      var upcoming = false;
      //Sort shows to past and future. If a date is in a future year, set upcoming to true,
      //if its in the same year check to see if it is in an upcoming month. repeat for months and days.
      if (currentDate.getFullYear() <= showDate.getFullYear()) {
        upcoming =
          currentDate.getFullYear() < showDate.getFullYear() ? true : upcoming;
        if (currentDate.getMonth() <= showDate.getMonth()) {
          upcoming =
            currentDate.getMonth() < showDate.getMonth() ? true : upcoming;
          if (currentDate.getDate() <= showDate.getDate()) {
            upcoming = true;
          }
        }
      }
      return upcoming;
    },
  },
};
</script>

<style lang='scss' scoped>
@import ".././styles/mixins.scss";

h3,
hr {
  width: 100%;
}

hr {
  border-color: grey;
}
</style>
