<template>
    <div class="conversation-balloon" :class="speaker">
    <!-- <div class="avatar">
        <img src="/static/user.png">
        <p class="name">{{ name }}</p>
    </div> -->
    <p class="message">{{ message }}</p>
    </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    speaker: {
      type: String,
      required: true,
      validator: value => {
        return ['my', 'other'].includes(value)
      }
    },
    message: {
      type: String,
      required: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--
<style scoped>
h1, h2 {
  font-weight: normal;
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
-->
