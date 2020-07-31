export default {
  methods: {
    formatToUrl (title) {
      return title.replace(/\s+/g, '-').toLowerCase();
    },
  },
}