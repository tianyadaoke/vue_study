export const mixin={
  methods: {
    showName(){
      console.log(this.name)
    }
  },
  mounted() {
    console.log('mixin mounted')
  },
}