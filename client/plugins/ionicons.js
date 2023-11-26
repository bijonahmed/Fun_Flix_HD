// plugins/ionicons.js
import 'ionicons';

// Register ion-icon as a custom element
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use({
    install(Vue) {
      Vue.component('ion-icon', window.ionicons.IonIcon);
    }
  });
}
