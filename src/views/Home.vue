<template>
  <div class="home">
    <Form1></Form1>
    <Form2></Form2>
    <Form3></Form3>
    <Form4></Form4>
    <Form5></Form5>
    <Form6></Form6>
    <Form7></Form7>
    <Form8></Form8>
    <Form9></Form9>
  </div>
</template>

<script>
// @ is an alias to /src

import Form1 from '@/components/Form1.vue'
import Form2 from '@/components/Form2.vue'
import Form3 from '@/components/Form3.vue'
import Form4 from '@/components/Form4.vue'
import Form5 from '@/components/Form5.vue'
import Form6 from '@/components/Form6.vue'
import Form7 from '@/components/Form7.vue'
import Form8 from '@/components/Form8.vue'
import Form9 from '@/components/Form9.vue'
export default {
  name: 'home',
  components: {
    Form1,
    Form2,
    Form3,
    Form4,
    Form5,
    Form6,
    Form7,
    Form8,
    Form9
  }
}
</script>
<style scoped>
  .home{
    margin-right: 30px;
    margin-left: 30px;
  }
  .home div{
    margin: 5px;
  }
</style>