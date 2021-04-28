export default ({ app }, inject) => {
  inject('hello', (msg) => console.log('hello world'));
};
