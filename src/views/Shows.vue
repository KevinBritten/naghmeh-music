<template>
  <div>
    <h3>Upcoming Shows</h3>
    <hr />
    <ShowItem v-for="show in upcomingShows" :key="show.name" :show="show" />
    <h3>Past Shows</h3>
    <hr />
    <ShowItem v-for="show in pastShows" :key="show.name" :show="show" />
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
  created() {
    this.fetchData().then((payload) => {
      //set shows to past or present once its the day after the show
      const currentDate = new Date(Date.now());
      console.log(currentDate);
      payload.forEach((show) => {
        var showDate = new Date(show.date);
        var upcoming =
          currentDate.getFullYear() <= showDate.getFullYear() &&
          currentDate.getMonth() <= showDate.getMonth() &&
          currentDate.getDay() <= showDate.getDay();
        if (upcoming == true) {
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
  },
};
</script>

<style>
</style>
