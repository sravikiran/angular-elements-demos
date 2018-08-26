<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      Select a city: <select v-model="internalSelected">
        <option value="Hyderabad">Hyderabad</option>
        <option value="Bangalore">Bangalore</option>
        <option value="Delhi">Delhi</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Chennai">Chennai</option>
        <option value="Kolkata">Kolkata</option>
        <option value="Ahmedabad">Ahmedabad</option>
      </select>
    </div>
    <div style="margin-left: 700px;">
      <weather-widget v-bind:city-name="internalSelected" v-on:cityNotFound="cityNotFound"></weather-widget>    
    </div>
  </div>
  
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
    selected: ""
  },
  data() {
    return {
      internalSelected: this.selected
    };
  },
  methods: {
    cityNotFound(e) {
      console.log(e);
      this.internalSelected = "Hyderabad";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
