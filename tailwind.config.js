module.exports = {
  purge: ["./src/**/*.svelte"],
  theme: {
    container:{
      // center:true,
    },
    extend: {
          colors:{
      darkBlue:'#003945',
      lightBG:'#e3eef8'
    },
    fontFamily:{
      karla: ['Karla', 'sans-serif']
    }
    },
  },
  variants: {},
  plugins: [],
}
