import './nav.html';


Template.nav.rendered = function () {
  $('.button-collapse').sideNav({
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    }
  );
};
