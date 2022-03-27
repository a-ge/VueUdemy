<template>
  <div>
    <active-user :username="user.name" :userage="user.age"></active-user>
    <user-data @set-data="setUserData"></user-data>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: 'Max Schwarzmueller',
        age: 31
      }
    };
  },
  methods: {
    setUserData(name, age) {
      this.user = {
        name: name,
        age: +age
      };
    }
  }
};
</script>
