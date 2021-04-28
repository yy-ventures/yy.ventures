<template>
  <div id="contact-form">
    <!-- <div class="uk-section"> -->
    <div class="uk-container">
      <div class="" uk-grid>
        <!-- <div class="uk-inline"> -->
        <div class="uk-width-1-1@m contact-form">
          <div class="form-container">
            <form name="contact_form">
              <div class="uk-margin">
                <input
                  class="uk-input form-input uk-form-width-large"
                  type="text"
                  name="name"
                  placeholder="Name"
                  v-model="name"
                  required
                />
              </div>
              <div class="uk-margin">
                <input
                  class="uk-input form-input uk-form-width-large"
                  type="text"
                  name="email"
                  placeholder="Email Address"
                  v-model="email"
                  required
                />
              </div>
              <div class="uk-margin">
                <input
                  class="uk-input form-input uk-form-width-large"
                  type="text"
                  name="company"
                  placeholder="Your Company"
                  v-model="company"
                  required
                />
              </div>
              <div class="uk-margin ">
                <textarea
                  class="uk-textarea form-input"
                  rows="5"
                  name="message"
                  placeholder="Tell us about your interest"
                  v-model="message"
                  required
                ></textarea>
              </div>
            </form>
            <div class="uk-margin uk-text-center">
              <button
                class="uk-button uk-button-default submit-btn"
                @click="sendMail()"
              ></button>
              <div class="response" v-if="this.emailSent">
                <span class="uk-margin"
                  >Your message was sent successfully. We'll get in touch
                  soon.</span
                >
              </div>
            </div>
          </div>
        </div>
        <div class="uk-width-1-3@m portfolio-contact-img"></div>
        <!-- </div>
	 -->
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      name: null,
      email: null,
      company: null,
      message: null,
      emailSent: false
    }
  },
  methods: {
    sendMail() {
      let bodyFormData = new FormData()
      bodyFormData.set('name', this.name)
      bodyFormData.set('email', this.email)
      bodyFormData.set('company', this.company)
      bodyFormData.set('message', this.message)
      axios
        .post('https://yy.ventures/email/handler.php', bodyFormData)
        .then(response => {
          console.log(response)
          if (response.status == 200) {
            this.emailSent = true
          }
        })
        .catch(error => {
          console.log(error)
        })

      /* this.$http({
        method: 'post',
        url: 'http://jamroll.xyz/backup/emails/handler.php',
        data: bodyFormData,
        config: { headers: { 'Content-Type': 'multipart/form-data' } }
      })
        .then(response => {
          //handle success
          console.log('sent')
          this.sent = true
          this.handleSuccess()
          console.log(response)
        })
        .catch(response => {
          //handle error
          console.log('in catch')
          this.failed = true
          this.handleFailure()
          console.log(response)
        }) */
    },
    handleSuccess() {
      console.log('in success')
      setTimeout(() => {
        this.sent = false
        this.name = ''
        this.email = ''
        this.message = ''
        this.company = ''
      }, 3000)
    },
    handleFailure() {
      console.log('in success')
      setTimeout(() => {
        this.failed = false
      }, 3000)
    }
  }
}
</script>

<style lang="less" scoped>
.response {
  margin-top: 20px;
}
#contact-form {
  background: #f1f2f2;
  background-size: contain;
  padding: 50px 0px;
  margin-top: 40px;
  .contact-heading {
    font-family: 'Graphik Super';
    color: white;
    font-size: 70px;
    margin: 0px;
    line-height: 65px;
    display: block;
  }
  .contact-heading:after {
    content: '';
    display: block;
    margin: 0;
    width: 42%;
    padding: 5px 0 10px 0;
    border-bottom: 6px solid white;
  }
  .form-container {
    padding-top: 60px;
  }
  input.uk-input.form-input {
    background: transparent;
    border-bottom: 1px solid #3a3b3a;
    border-top: none;
    border-right: none;
    border-left: none;
  }
  input.uk-input.form-input::placeholder {
    color: #3a3b3a;
  }
  textarea.uk-textarea.form-input {
    background: transparent;
    border-bottom: 1px solid #3a3b3a;
    border-top: none;
    border-right: none;
    border-left: none;
  }
  textarea.uk-textarea.form-input::placeholder {
    color: #3a3b3a;
  }
  .submit-btn {
    // background-color: transparent;
    // color: #ffffff;
    // border: 2px solid #ffffff;
    background: url('~assets/images/bottom-arrow.png') no-repeat;
    height: 50px;
    border: none;
    background-size: 50px 50px;
    margin-top: 40px;
  }
  .submit-btn:hover{
    position: relative;
    animation: moveimg .4s;
    animation-timing-function: linear;
  }
  @keyframes moveimg {
    from {top: 0px;}
    to {bottom: 20px;}
  }
}
</style>
