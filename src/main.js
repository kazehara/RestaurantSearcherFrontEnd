// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Balloon from '@/components/Balloon'
import ChatForm from '@/components/ChatForm'
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    balloon: Balloon,
    chatForm: ChatForm
  },
  data () {
    return {
      strOut: '',
      chatLogs: [
         { name: 'bot', speaker: 'other', message: '行きたいお店の希望を入力して、送信ボタンを押してね！' }
      ]
    }
  },
  methods: {
    submit (value) {
      this.chatLogs.push({
        name: 'user',
        speaker: 'my',
        message: value
      })
      this.botSubmit(value)
      this.scrollDown()
    },
    botSubmit (strIn) {
      let params = new URLSearchParams()
      params.append('user_input', strIn)

      axios.post('http://localhost:6300/talk', params)
      .then(response => { this.strOut = response.data[0].sentence })
      .catch(error => console.log(error))

      setTimeout(() => {
        this.chatLogs.push({
          name: 'bot',
          speaker: 'other',
          message: this.strOut
        })
        this.scrollDown()
      }, 1000)
    },
    scrollDown () {
      const target = this.$el.querySelector('.chat-timeline')
      setTimeout(() => {
        const height = target.scrollHeight - target.offsetHeight
        target.scrollTop += 10

        if (height <= target.scrollTop) {
        } else {
          this.scrollDown()
        }
      }, 0)
    }
  }
})
