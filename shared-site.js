(function() {
  var page = document.body.getAttribute('data-page') || '';

  var navHTML = ''
    + '<div class="nav-inner">'
    + '<a href="/index.html" class="nav-brand"><img src="/logo-mark-64.png" alt="" class="nav-logo">The I Love Method™</a>'
    + '<div class="nav-links">'
    + '<a href="/the-method.html" class="' + (page==='method'?'active':'') + '">The Method</a>'
    + '<a href="/how-it-works.html" class="' + (page==='how'?'active':'') + '">How It Works</a>'
    + '<a href="/30-day-journey/" class="' + (page==='journey'?'active':'') + '">30-Day Journey</a>'
    + '<a href="/about.html" class="' + (page==='about'?'active':'') + '">About</a>'
    + '<a href="/insights.html" class="' + (page==='insights'?'active':'') + '">Insights</a>'
    + '</div>'
    + '<a href="/30-day-journey/" class="nav-cta">Start Your Journey</a>'
    + '<button class="nav-toggle" id="navToggle" aria-label="Menu">☰</button>'
    + '</div>'
    + '<div class="nav-mobile" id="navMobile">'
    + '<a href="/index.html">Home</a>'
    + '<a href="/the-method.html">The I Love Method™</a>'
    + '<a href="/how-it-works.html">How It Works</a>'
    + '<a href="/30-day-journey/">30-Day Journey</a>'
    + '<a href="/about.html">About</a>'
    + '<a href="/insights.html">Insights</a>'
    + '<a href="/30-day-journey/" class="nav-cta" style="text-align:center;margin-top:8px;">Start Your Journey</a>'
    + '</div>';

  var footerHTML = ''
    + '<div class="footer-inner">'
    + '<div>'
    + '<div class="footer-brand">The I Love Method™</div>'
    + '<div class="footer-tag">A foundation for lasting change — working with your mind, body, and emotions together.</div>'
    + '</div>'
    + '<div class="footer-col"><h4>Explore</h4>'
    + '<a href="/index.html">Home</a>'
    + '<a href="/the-method.html">The I Love Method™</a>'
    + '<a href="/how-it-works.html">How It Works</a>'
    + '<a href="/30-day-journey/">30-Day Journey</a>'
    + '<a href="/about.html">About</a>'
    + '<a href="/insights.html">Insights</a>'
    + '</div>'
    + '<div class="footer-col"><h4>Support</h4>'
    + '<a href="/faq.html">FAQ</a>'
    + '<a href="mailto:contact@lilexo.com">Contact</a>'
    + '</div>'
    + '<div class="footer-col"><h4>Legal</h4>'
    + '<a href="/terms.html">Terms &amp; Conditions</a>'
    + '<a href="/privacy.html">Privacy Policy</a>'
    + '<a href="/refund.html">Refund Policy</a>'
    + '<a href="/disclaimer.html">Disclaimer</a>'
    + '</div>'
    + '</div>'
    + '<div class="footer-bottom">© 2025 The I Love Method™ &nbsp;·&nbsp; All rights reserved</div>'
    + '<div class="footer-disclaimer">This course is for personal development and educational purposes only. It is not a substitute for professional medical, psychological, or mental health treatment.</div>';

  document.addEventListener('DOMContentLoaded', function() {
    var navMount = document.getElementById('site-nav');
    var footerMount = document.getElementById('site-footer');
    if (navMount) {
      navMount.innerHTML = navHTML;
      var toggle = document.getElementById('navToggle');
      var mobile = document.getElementById('navMobile');
      if (toggle && mobile) {
        toggle.addEventListener('click', function() {
          mobile.classList.toggle('open');
        });
      }
    }
    if (footerMount) { footerMount.innerHTML = footerHTML; }

    // FAQ accordion
    document.querySelectorAll('.faq-item').forEach(function(item) {
      var q = item.querySelector('.faq-q');
      if (!q) return;
      q.addEventListener('click', function() {
        var wasOpen = item.classList.contains('open');
        document.querySelectorAll('.faq-item.open').forEach(function(o) { o.classList.remove('open'); });
        if (!wasOpen) item.classList.add('open');
      });
    });
  });
})();
